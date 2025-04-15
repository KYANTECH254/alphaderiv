"use server";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import crypto from "crypto";
import { DateTime } from "luxon";
import { prisma } from "@/lib/prisma";
import { getSocketInstance } from "@/lib/socket";

const SECRET_CHALLENGE = "Sss333123###kyan";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        if (body.challenge !== SECRET_CHALLENGE) {
            return NextResponse.json({ error: "Unauthorized webhook" }, { status: 403 });
        }

        const { invoice_id, state, account, net_amount, updated_at } = body;

        const formattedPhone = account.replace(/^2547/, "07").replace(/^2541/, "01");

        await prisma.mpesaCode.updateMany({
            where: { code: invoice_id },
            data: {
                status: state,
                updatedAt: DateTime.fromISO(updated_at, { zone: "Africa/Nairobi" }).toJSDate(),
            },
        });

        const io = getSocketInstance();
        if (!io) {
            console.error("Socket.IO not initialized.");
        }

        if (state === "SUCCESS") {
            const user = await prisma.user.findUnique({
                where: { phone: formattedPhone },
            });

            if (user) {
                const now = DateTime.now().setZone("Africa/Nairobi");
                const expiryTime = user.pkgExpiry 
                    ? DateTime.fromJSDate(user.pkgExpiry, { zone: "Africa/Nairobi" }) 
                    : now;

                let newExpiryDate = expiryTime;
                let title = '';

                switch (net_amount) {
                    case "20.00":
                        newExpiryDate = newExpiryDate.plus({ hours: 1 });
                        title = "Hourly";
                        break;
                    case "100.00":
                        newExpiryDate = newExpiryDate.plus({ days: 1 });
                        title = "Daily";
                        break;
                    case "500.00":
                        newExpiryDate = newExpiryDate.plus({ days: 7 });
                        title = "Weekly";
                        break;
                    case "1000.00":
                        newExpiryDate = newExpiryDate.plus({ days: 30 });
                        title = "Monthly";
                        break;
                    default:
                        console.error("⚠️ Unknown payment amount:", net_amount);
                        return NextResponse.json({ error: "Invalid payment amount" }, { status: 400 });
                }

                const token = crypto.randomBytes(32).toString("hex");
                (await cookies()).set("userToken", token, { httpOnly: true, secure: true });

                await prisma.user.update({
                    where: { phone: formattedPhone },
                    data: {
                        package: net_amount,
                        token: token,
                        status: "active",
                        pkgExpiry: newExpiryDate.toJSDate(),
                        pkgUpdatedAt: now.toJSDate(),
                    },
                });

                if (io) {
                    io.emit("paid", { paid: true, userToken: token });
                    console.log("Payment event emitted to clients.");
                }
            }

            return NextResponse.json({ message: "Payment successful" }, { status: 200 });

        } else if (state === "FAILED") {
            if (io) {
                io.emit("payment_failed", { paid: false, userToken: null });
                console.log("Payment failed event emitted.");
            }
        }

        return NextResponse.json({ message: `Payment status: ${state}` }, { status: 200 });

    } catch (error) {
        console.error("M-Pesa Callback Error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
