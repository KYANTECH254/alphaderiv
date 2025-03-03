"use server";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import crypto from "crypto";
import { DateTime } from "luxon"; 
import { prisma } from "@/lib/prisma";

const SECRET_CHALLENGE = "Sss333123###kyan"; 

export async function POST(req: Request) {
    try {
        const body = await req.json();
        if (body.challenge !== SECRET_CHALLENGE) {
            return NextResponse.json({ error: "Unauthorized webhook" }, { status: 403 });
        }

        const { invoice_id, state, account, net_amount, updated_at } = body;
        let formattedPhone = account.replace(/^2547/, "07").replace(/^2541/, "01");

        await prisma.mpesaCode.updateMany({
            where: { code: invoice_id },
            data: { 
                status: state,
                updatedAt: DateTime.fromISO(updated_at, { zone: "Africa/Nairobi" }).toJSDate(), 
            },
        });

        if (state === "SUCCESS") {
            const user = await prisma.user.findUnique({
                where: { phone: formattedPhone },
            });

            if (user) {
                const now = DateTime.now().setZone("Africa/Nairobi");
                const expiryTime = user.pkgExpiry ? DateTime.fromJSDate(user.pkgExpiry, { zone: "Africa/Nairobi" }) : now;

                let newExpiryDate = expiryTime;
                if (net_amount === "100.00") newExpiryDate = newExpiryDate.plus({ days: 1 });
                if (net_amount === "500.00") newExpiryDate = newExpiryDate.plus({ days: 7 });
                if (net_amount === "1000.00") newExpiryDate = newExpiryDate.plus({ days: 30 });

                const token = crypto.randomBytes(32).toString("hex");
                cookies().set("userToken", token, { httpOnly: true, secure: true });

                await prisma.user.update({
                    where: { phone: formattedPhone },
                    data: {
                        token: token,
                        status: "active",
                        pkgExpiry: newExpiryDate.toJSDate(),
                        pkgUpdatedAt: now.toJSDate(),
                    },
                });
            }

            return NextResponse.json({ message: "Payment successful" }, { status: 200 });
        }

        return NextResponse.json({ message: `Payment status: ${state}` }, { status: 200 });

    } catch (error) {
        console.error("M-Pesa Callback Error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
