/*
  Warnings:

  - You are about to alter the column `maxStudents` on the `Class` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `Class` MODIFY `maxStudents` INTEGER NOT NULL;
