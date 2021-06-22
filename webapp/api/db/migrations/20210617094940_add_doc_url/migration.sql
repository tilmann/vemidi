-- AlterTable
ALTER TABLE "Flat" ADD COLUMN     "rawDocUrl" TEXT,
ALTER COLUMN "zipCode" DROP NOT NULL;
