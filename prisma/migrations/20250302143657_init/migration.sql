-- CreateTable
CREATE TABLE "MpesaCode" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "phone" TEXT NOT NULL,
    "package" TEXT NOT NULL,
    "pkgExpiry" DATETIME NOT NULL,
    "pkgCreatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "pkgUpdatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "MpesaCode_code_key" ON "MpesaCode"("code");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");
