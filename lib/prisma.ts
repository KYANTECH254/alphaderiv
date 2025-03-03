import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma?: PrismaClient };

// Ensure we use a single PrismaClient instance
export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.ENVIRONMENT !== "production") globalForPrisma.prisma = prisma;
