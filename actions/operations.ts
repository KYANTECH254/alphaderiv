"use server"

import { PrismaClient } from "@prisma/client";
import { cookies } from "next/headers";
import crypto from "crypto";
const prisma = new PrismaClient();
const IntaSend = require('intasend-node');

let intasend = new IntaSend(
    process.env.INTASEND_PUBLISHABLE_KEY,
    process.env.INTASEND_SECRET_KEY,
    false,
);

const ENVIRONMENT = process.env.ENVIRONMENT;

export async function checkUserSession() {
    try {
        const clientToken = cookies().get("userToken")?.value;
        console.log("Token:", clientToken);

        if (!clientToken) {
            return { isValid: false, message: "No authentication token found." };
        }
        const user = await prisma.user.findFirst({ where: { token: clientToken } });
        if (!user) {
            return { isValid: false, message: "User not found.", user: null };
        }
        if (user.token !== clientToken) {
            return { isValid: false, message: "Invalid session token." };
        }
        const now = new Date();
        if (user.pkgExpiry && new Date(user.pkgExpiry) < now) {
            await prisma.user.update({
                where: { phone: user.phone },
                data: { status: "expired" },
            });

            return { isValid: false, message: "Subscription expired. Please renew." };
        }

        return { isValid: true, message: "User is authenticated.", user };
    } catch (error) {
        console.error("Session Check Error:", error);
        return { isValid: false, message: "Internal server error." };
    }
}

export async function loginUser(phone: any) {
    try {
        let formattedPhone = await validatePhone(phone);
        if (!formattedPhone) {
            return { type: "error", message: "Phone number is invalid!" };
        }
        const user = await prisma.user.findUnique({
            where: { phone: formattedPhone },
        });

        if (!user) {
            return { type: "error", message: "User not found" };
        }
        if (user.status === "inactive") {
            return { type: "error", message: "Account is inactive!" };
        }
        if (user.status === "expired") {
            return { type: "error", message: "Account is subcription is expired!" };
        }
        const now = new Date();
        if (user.pkgExpiry && new Date(user.pkgExpiry) < now) {
            if (user.status !== "expired")
                await prisma.user.update({
                    where: { phone: user.phone },
                    data: { status: "expired" },
                });
            return { type: "error", message: "Subscription expired!" };
        }
        const token = crypto.randomBytes(32).toString("hex");
        await prisma.user.update({
            where: { phone: formattedPhone },
            data: { token },
        });
        cookies().set("userToken", token, { httpOnly: ENVIRONMENT === "production" ? true : false, secure: ENVIRONMENT === "production" ? true : false });
        return { type: "success", message: "Login successful", user };
    } catch (error) {
        console.error("Login Error:", error);
        return { type: "error", message: "Internal server error" };
    }
}

export async function validatePhone(phoneNumber: any) {
    const cleanedPhone = phoneNumber.trim();
    const phoneRegex = /^(07|01)\d{8}$/;
    if (!cleanedPhone || !phoneRegex.test(cleanedPhone)) {

        return null;
    }
    return cleanedPhone;
}

export async function getUser(data: any) {
    let user = null;
    user = prisma.user.findUnique({
        where: {
            phone: data
        }
    })
    return user;
}

export async function getMpesaCode(data: any) {
    let mpesaCode = null;
    mpesaCode = prisma.mpesaCode.findMany({
        where: {
            code: data
        }
    })
    return mpesaCode;
}

export async function createMpesaCode(data: any) {
    let mpesaCode = null;
    mpesaCode = prisma.mpesaCode.create({
        data: {
            code: data.code,
            phone: data.phone,
            amount: data.amount,
            status: data.status,
            createdAt: new Date(),
            updatedAt: new Date()
        }
    })
    return mpesaCode;
}

export async function createUser(data: any) {
    let user = null;
    user = prisma.user.create({
        data: {
            phone: data.phone,
            package: data.package,
            status: data.status,
            token: data.token,
            pkgExpiry: new Date(),
            pkgCreatedAt: new Date(),
            pkgUpdatedAt: new Date()
        }
    })
    return user;
}

export async function deleteUser(data: any) {
    let user = null;
    user = prisma.user.delete({
        where: {
            phone: data
        }
    })
    return user;
}

export async function subscribeUser(data: any) {
    try {
        const { phone, Mypackage } = data;

        const cleanedPhone = await validatePhone(phone);
        if (!cleanedPhone) {
            return {
                message: "Please enter a valid 10-digit phone number starting with 07 or 01.",
                type: "error"
            };
        }

        const collection = intasend.collection();

        // Initiate MPesa STK Push request
        const resp = await collection.mpesaStkPush({
            first_name: 'Joe',
            last_name: 'Doe',
            email: 'joe@doe.com',
            host: 'https://alphabot.topwebtools.online/',
            amount: Mypackage.price,
            phone_number: cleanedPhone,
            api_ref: 'Alphabot Subscription',
        });

        console.log(`STK Push Resp:`, resp);

        // Check if user exists
        let user = await prisma.user.findUnique({
            where: { phone: cleanedPhone },
        });

        if (!user) {
            // If user does not exist, create them
            user = await prisma.user.create({
                data: {
                    phone: cleanedPhone,
                    package: Mypackage.title,
                    status: "inactive",
                    token: "null",
                    pkgExpiry: new Date(),  // Default expiry (you may want to calculate this)
                    pkgCreatedAt: new Date(),
                    pkgUpdatedAt: new Date(),
                },
            });
        } else {
            console.log(user);

            // If user exists, update them
            user = await prisma.user.update({
                where: { phone: cleanedPhone },
                data: {
                    package: Mypackage.title,
                    status: "inactive",
                    token: "null",
                    pkgUpdatedAt: new Date(),
                },
            });
        }

        const addMpesaCode = await prisma.mpesaCode.create({
            data: {
                code: resp.invoice.invoice_id,
                phone: resp.invoice.account,
                amount: resp.invoice.net_amount,
                status: resp.invoice.state,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        })

        return { type: "success", message: "Payment request accepted, check phone and enter MPESA Pin", user, response: resp };
    } catch (err: any) {
        console.error(`STK Push Resp error:`, err);
        return { type: "error", message: "Failed to process payment", error: err.message || err };
    }
}

const sktpush = {
    id: 'edafa0b6-37c5-4174-b5e2-641a677d0183',
    invoice: {
        invoice_id: 'YEMVL5P',
        state: 'PENDING',
        provider: 'M-PESA',
        charges: 0,
        net_amount: '10.00',
        currency: 'KES',
        value: 10,
        account: '254723551116',
        api_ref: 'Alphabot Subscription',
        mpesa_reference: null,
        host: '102.0.16.22',
        card_info: { bin_country: null, card_type: null },
        retry_count: 0,
        failed_reason: null,
        failed_code: null,
        failed_code_link: null,
        created_at: '2025-03-02T18:23:49.463178+03:00',
        updated_at: '2025-03-02T18:23:49.469153+03:00'
    },
    customer: {
        customer_id: 'KORM43K',
        phone_number: '254723551116',
        email: null,
        first_name: null,
        last_name: null,
        country: null,
        zipcode: null,
        provider: 'M-PESA',
        created_at: '2024-05-09T11:37:33.726413+03:00',
        updated_at: '2024-07-11T09:45:13.776474+03:00'
    },
    payment_link: null,
    customer_comment: null,
    refundable: false,
    created_at: '2025-03-02T18:23:49.491367+03:00',
    updated_at: '2025-03-02T18:23:49.491379+03:00'
}