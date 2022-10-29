/*
  Warnings:

  - You are about to drop the column `content` on the `Album` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Album" DROP COLUMN "content";

-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL,
    "publicId" TEXT NOT NULL,
    "format" TEXT NOT NULL,
    "version" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Image_publicId_key" ON "Image"("publicId");
