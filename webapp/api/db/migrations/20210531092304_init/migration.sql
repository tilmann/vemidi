-- CreateTable
CREATE TABLE "Flat" (
    "id" TEXT NOT NULL,
    "zipCode" TEXT NOT NULL,
    "squareMeters" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);
