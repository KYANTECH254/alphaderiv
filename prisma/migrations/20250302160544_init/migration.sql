/*
  Warnings:

  - Added the required column `status` to the `MpesaCode` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MpesaCode" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "code" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_MpesaCode" ("amount", "code", "createdAt", "id", "phone", "updatedAt") SELECT "amount", "code", "createdAt", "id", "phone", "updatedAt" FROM "MpesaCode";
DROP TABLE "MpesaCode";
ALTER TABLE "new_MpesaCode" RENAME TO "MpesaCode";
CREATE UNIQUE INDEX "MpesaCode_code_key" ON "MpesaCode"("code");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
