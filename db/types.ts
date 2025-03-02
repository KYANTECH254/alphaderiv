export type User = {
    id: number;
    phone: string;
    package: string;
    token: string;
    status: "active" | "inactive" | "expired";
    pkgExpiry: string | Date; 
    pkgCreatedAt: string | Date;
    pkgUpdatedAt: string | Date;
};

export type MpesaCode = {
    code: string;
    phone: string;
    amount: string;
    status: "COMPLETED" | "FAILED" | "PENDING" | "PROCESSING";
    createdAt: Date;
    updatedAt: Date;
}
