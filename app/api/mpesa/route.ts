"use server";
import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';
import { cookies } from "next/headers";
import crypto from "crypto";

const prisma = new PrismaClient();
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
                updatedAt: new Date(updated_at),
            },
        });
        if (state === "SUCCESS") {
            const user = await prisma.user.findUnique({
                where: { phone: formattedPhone },
            });

            if (user) {
                const newExpiryDate = new Date(user.pkgExpiry ?? new Date());
                if (net_amount === "100.00") newExpiryDate.setDate(newExpiryDate.getDate() + 1); // 1 day
                if (net_amount === "500.00") newExpiryDate.setDate(newExpiryDate.getDate() + 7); // 7 days
                if (net_amount === "1000.00") newExpiryDate.setDate(newExpiryDate.getDate() + 30); // 30 days

                await prisma.user.update({
                    where: { phone: formattedPhone },
                    data: {
                        status: "active",
                        pkgExpiry: newExpiryDate,
                        pkgUpdatedAt: new Date(),
                    },
                });
            }
            const token = crypto.randomBytes(32).toString("hex");
            cookies().set("userToken", token, { httpOnly: true, secure: true });

            return NextResponse.json({ message: "Payment successful" }, { status: 200 });
        }

        return NextResponse.json({ message: `Payment status: ${state}` }, { status: 200 });

    } catch (error) {
        console.error("M-Pesa Callback Error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
