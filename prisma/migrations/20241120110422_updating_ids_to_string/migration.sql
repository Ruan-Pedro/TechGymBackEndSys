/*
  Warnings:

  - The primary key for the `AttendanceList` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Class_ID` on the `AttendanceList` table. All the data in the column will be lost.
  - You are about to drop the column `Class_ProfessorsClass_ID` on the `AttendanceList` table. All the data in the column will be lost.
  - You are about to drop the column `Class_WaitingList_ID` on the `AttendanceList` table. All the data in the column will be lost.
  - You are about to drop the column `CreatedAt` on the `AttendanceList` table. All the data in the column will be lost.
  - You are about to drop the column `DateList` on the `AttendanceList` table. All the data in the column will be lost.
  - You are about to drop the column `Presence` on the `AttendanceList` table. All the data in the column will be lost.
  - You are about to drop the column `Students_ID` on the `AttendanceList` table. All the data in the column will be lost.
  - You are about to drop the column `Students_Membership_ID` on the `AttendanceList` table. All the data in the column will be lost.
  - You are about to drop the column `Students_TransmitionList_ID` on the `AttendanceList` table. All the data in the column will be lost.
  - You are about to drop the column `UpdatedAt` on the `AttendanceList` table. All the data in the column will be lost.
  - The primary key for the `Class` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Active` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `Description` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `MaxStudents` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `ProfessorsClass_ID` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `Schedule` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `Value` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `WaitingList_ID` on the `Class` table. All the data in the column will be lost.
  - The primary key for the `Membership` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Cost` on the `Membership` table. All the data in the column will be lost.
  - You are about to drop the column `CreatedAt` on the `Membership` table. All the data in the column will be lost.
  - You are about to drop the column `Description` on the `Membership` table. All the data in the column will be lost.
  - You are about to drop the column `Type` on the `Membership` table. All the data in the column will be lost.
  - You are about to drop the column `UpdatedAt` on the `Membership` table. All the data in the column will be lost.
  - The primary key for the `Notification` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `CreatedAt` on the `Notification` table. All the data in the column will be lost.
  - You are about to drop the column `Message` on the `Notification` table. All the data in the column will be lost.
  - You are about to drop the column `ProfessorID` on the `Notification` table. All the data in the column will be lost.
  - You are about to drop the column `StudentID` on the `Notification` table. All the data in the column will be lost.
  - You are about to drop the column `Title` on the `Notification` table. All the data in the column will be lost.
  - You are about to drop the column `TransmitionList_ID` on the `Notification` table. All the data in the column will be lost.
  - You are about to drop the column `UpdatedAt` on the `Notification` table. All the data in the column will be lost.
  - The primary key for the `Professors` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Active` on the `Professors` table. All the data in the column will be lost.
  - You are about to drop the column `CreatedAt` on the `Professors` table. All the data in the column will be lost.
  - You are about to drop the column `FinishedAt` on the `Professors` table. All the data in the column will be lost.
  - You are about to drop the column `Name` on the `Professors` table. All the data in the column will be lost.
  - You are about to drop the column `ProfessorsClass_ID` on the `Professors` table. All the data in the column will be lost.
  - You are about to drop the column `Salary` on the `Professors` table. All the data in the column will be lost.
  - You are about to drop the column `StartedAt` on the `Professors` table. All the data in the column will be lost.
  - You are about to drop the column `TransmitionList_ID` on the `Professors` table. All the data in the column will be lost.
  - You are about to drop the column `UpdatedAt` on the `Professors` table. All the data in the column will be lost.
  - You are about to drop the column `User_ID` on the `Professors` table. All the data in the column will be lost.
  - The primary key for the `ProfessorsClass` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ClassID` on the `ProfessorsClass` table. All the data in the column will be lost.
  - You are about to drop the column `ProfessorsID` on the `ProfessorsClass` table. All the data in the column will be lost.
  - The primary key for the `Students` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Active` on the `Students` table. All the data in the column will be lost.
  - You are about to drop the column `Birthday` on the `Students` table. All the data in the column will be lost.
  - You are about to drop the column `Cep` on the `Students` table. All the data in the column will be lost.
  - You are about to drop the column `City` on the `Students` table. All the data in the column will be lost.
  - You are about to drop the column `CreatedAt` on the `Students` table. All the data in the column will be lost.
  - You are about to drop the column `Membership_ID` on the `Students` table. All the data in the column will be lost.
  - You are about to drop the column `Name` on the `Students` table. All the data in the column will be lost.
  - You are about to drop the column `Nickname` on the `Students` table. All the data in the column will be lost.
  - You are about to drop the column `Number` on the `Students` table. All the data in the column will be lost.
  - You are about to drop the column `SocialName` on the `Students` table. All the data in the column will be lost.
  - You are about to drop the column `State` on the `Students` table. All the data in the column will be lost.
  - You are about to drop the column `TransmitionList_ID` on the `Students` table. All the data in the column will be lost.
  - You are about to drop the column `UpdatedAt` on the `Students` table. All the data in the column will be lost.
  - You are about to drop the column `User_ID` on the `Students` table. All the data in the column will be lost.
  - The primary key for the `StudentsClass` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ClassID` on the `StudentsClass` table. All the data in the column will be lost.
  - You are about to drop the column `StudentsID` on the `StudentsClass` table. All the data in the column will be lost.
  - The primary key for the `TransmitionList` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `CreatedAt` on the `TransmitionList` table. All the data in the column will be lost.
  - You are about to drop the column `Description` on the `TransmitionList` table. All the data in the column will be lost.
  - You are about to drop the column `UpdatedAt` on the `TransmitionList` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `CreatedAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Image_profile` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Type` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `UpdatedAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Username` on the `User` table. All the data in the column will be lost.
  - The primary key for the `WaitingList` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Class_ID` on the `WaitingList` table. All the data in the column will be lost.
  - You are about to drop the column `Students_ID` on the `WaitingList` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `class_ID` to the `AttendanceList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `class_ProfessorsClass_ID` to the `AttendanceList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `class_WaitingList_ID` to the `AttendanceList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `AttendanceList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateList` to the `AttendanceList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `presence` to the `AttendanceList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `students_ID` to the `AttendanceList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `students_Membership_ID` to the `AttendanceList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `students_TransmitionList_ID` to the `AttendanceList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `AttendanceList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `active` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maxStudents` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `professorsClass_ID` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `schedule` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `waitingList_ID` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cost` to the `Membership` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `Membership` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Membership` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Membership` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Membership` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `Notification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `message` to the `Notification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `professorID` to the `Notification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `studentID` to the `Notification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Notification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transmitionList_ID` to the `Notification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Notification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `active` to the `Professors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `Professors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `finishedAt` to the `Professors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Professors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `professorsClass_ID` to the `Professors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salary` to the `Professors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startedAt` to the `Professors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transmitionList_ID` to the `Professors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Professors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_ID` to the `Professors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `classID` to the `ProfessorsClass` table without a default value. This is not possible if the table is not empty.
  - Added the required column `professorsID` to the `ProfessorsClass` table without a default value. This is not possible if the table is not empty.
  - Added the required column `active` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthday` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cep` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `membership_ID` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nickname` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `socialName` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transmitionList_ID` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_ID` to the `Students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `classID` to the `StudentsClass` table without a default value. This is not possible if the table is not empty.
  - Added the required column `studentsID` to the `StudentsClass` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `TransmitionList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `TransmitionList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `TransmitionList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_profile` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `class_ID` to the `WaitingList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `students_ID` to the `WaitingList` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `User_Email_key` ON `User`;

-- AlterTable
ALTER TABLE `AttendanceList` DROP PRIMARY KEY,
    DROP COLUMN `Class_ID`,
    DROP COLUMN `Class_ProfessorsClass_ID`,
    DROP COLUMN `Class_WaitingList_ID`,
    DROP COLUMN `CreatedAt`,
    DROP COLUMN `DateList`,
    DROP COLUMN `Presence`,
    DROP COLUMN `Students_ID`,
    DROP COLUMN `Students_Membership_ID`,
    DROP COLUMN `Students_TransmitionList_ID`,
    DROP COLUMN `UpdatedAt`,
    ADD COLUMN `class_ID` INTEGER NOT NULL,
    ADD COLUMN `class_ProfessorsClass_ID` VARCHAR(191) NOT NULL,
    ADD COLUMN `class_WaitingList_ID` VARCHAR(191) NOT NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL,
    ADD COLUMN `dateList` DATETIME(3) NOT NULL,
    ADD COLUMN `presence` INTEGER NOT NULL,
    ADD COLUMN `students_ID` VARCHAR(191) NOT NULL,
    ADD COLUMN `students_Membership_ID` VARCHAR(191) NOT NULL,
    ADD COLUMN `students_TransmitionList_ID` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `ID` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`ID`);

-- AlterTable
ALTER TABLE `Class` DROP PRIMARY KEY,
    DROP COLUMN `Active`,
    DROP COLUMN `Description`,
    DROP COLUMN `MaxStudents`,
    DROP COLUMN `ProfessorsClass_ID`,
    DROP COLUMN `Schedule`,
    DROP COLUMN `Value`,
    DROP COLUMN `WaitingList_ID`,
    ADD COLUMN `active` INTEGER NOT NULL,
    ADD COLUMN `description` VARCHAR(191) NOT NULL,
    ADD COLUMN `maxStudents` VARCHAR(191) NOT NULL,
    ADD COLUMN `professorsClass_ID` VARCHAR(191) NOT NULL,
    ADD COLUMN `schedule` DATETIME(3) NOT NULL,
    ADD COLUMN `value` DOUBLE NOT NULL,
    ADD COLUMN `waitingList_ID` VARCHAR(191) NOT NULL,
    MODIFY `ID` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`ID`);

-- AlterTable
ALTER TABLE `Membership` DROP PRIMARY KEY,
    DROP COLUMN `Cost`,
    DROP COLUMN `CreatedAt`,
    DROP COLUMN `Description`,
    DROP COLUMN `Type`,
    DROP COLUMN `UpdatedAt`,
    ADD COLUMN `cost` DOUBLE NOT NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL,
    ADD COLUMN `description` VARCHAR(191) NOT NULL,
    ADD COLUMN `type` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `ID` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`ID`);

-- AlterTable
ALTER TABLE `Notification` DROP PRIMARY KEY,
    DROP COLUMN `CreatedAt`,
    DROP COLUMN `Message`,
    DROP COLUMN `ProfessorID`,
    DROP COLUMN `StudentID`,
    DROP COLUMN `Title`,
    DROP COLUMN `TransmitionList_ID`,
    DROP COLUMN `UpdatedAt`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL,
    ADD COLUMN `message` VARCHAR(191) NOT NULL,
    ADD COLUMN `professorID` VARCHAR(191) NOT NULL,
    ADD COLUMN `studentID` VARCHAR(191) NOT NULL,
    ADD COLUMN `title` VARCHAR(191) NOT NULL,
    ADD COLUMN `transmitionList_ID` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `ID` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`ID`);

-- AlterTable
ALTER TABLE `Professors` DROP PRIMARY KEY,
    DROP COLUMN `Active`,
    DROP COLUMN `CreatedAt`,
    DROP COLUMN `FinishedAt`,
    DROP COLUMN `Name`,
    DROP COLUMN `ProfessorsClass_ID`,
    DROP COLUMN `Salary`,
    DROP COLUMN `StartedAt`,
    DROP COLUMN `TransmitionList_ID`,
    DROP COLUMN `UpdatedAt`,
    DROP COLUMN `User_ID`,
    ADD COLUMN `active` INTEGER NOT NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL,
    ADD COLUMN `finishedAt` DATETIME(3) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `professorsClass_ID` VARCHAR(191) NOT NULL,
    ADD COLUMN `salary` DOUBLE NOT NULL,
    ADD COLUMN `startedAt` DATETIME(3) NOT NULL,
    ADD COLUMN `transmitionList_ID` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD COLUMN `user_ID` VARCHAR(191) NOT NULL,
    MODIFY `ID` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`ID`);

-- AlterTable
ALTER TABLE `ProfessorsClass` DROP PRIMARY KEY,
    DROP COLUMN `ClassID`,
    DROP COLUMN `ProfessorsID`,
    ADD COLUMN `classID` VARCHAR(191) NOT NULL,
    ADD COLUMN `professorsID` VARCHAR(191) NOT NULL,
    MODIFY `ID` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`ID`);

-- AlterTable
ALTER TABLE `Students` DROP PRIMARY KEY,
    DROP COLUMN `Active`,
    DROP COLUMN `Birthday`,
    DROP COLUMN `Cep`,
    DROP COLUMN `City`,
    DROP COLUMN `CreatedAt`,
    DROP COLUMN `Membership_ID`,
    DROP COLUMN `Name`,
    DROP COLUMN `Nickname`,
    DROP COLUMN `Number`,
    DROP COLUMN `SocialName`,
    DROP COLUMN `State`,
    DROP COLUMN `TransmitionList_ID`,
    DROP COLUMN `UpdatedAt`,
    DROP COLUMN `User_ID`,
    ADD COLUMN `active` INTEGER NOT NULL,
    ADD COLUMN `birthday` DATETIME(3) NOT NULL,
    ADD COLUMN `cep` INTEGER NOT NULL,
    ADD COLUMN `city` VARCHAR(191) NOT NULL,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL,
    ADD COLUMN `membership_ID` VARCHAR(191) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `nickname` VARCHAR(191) NOT NULL,
    ADD COLUMN `number` INTEGER NOT NULL,
    ADD COLUMN `socialName` VARCHAR(191) NOT NULL,
    ADD COLUMN `state` VARCHAR(191) NOT NULL,
    ADD COLUMN `transmitionList_ID` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD COLUMN `user_ID` VARCHAR(191) NOT NULL,
    MODIFY `ID` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`ID`);

-- AlterTable
ALTER TABLE `StudentsClass` DROP PRIMARY KEY,
    DROP COLUMN `ClassID`,
    DROP COLUMN `StudentsID`,
    ADD COLUMN `classID` VARCHAR(191) NOT NULL,
    ADD COLUMN `studentsID` VARCHAR(191) NOT NULL,
    MODIFY `ID` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`ID`);

-- AlterTable
ALTER TABLE `TransmitionList` DROP PRIMARY KEY,
    DROP COLUMN `CreatedAt`,
    DROP COLUMN `Description`,
    DROP COLUMN `UpdatedAt`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL,
    ADD COLUMN `description` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `ID` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`ID`);

-- AlterTable
ALTER TABLE `User` DROP PRIMARY KEY,
    DROP COLUMN `CreatedAt`,
    DROP COLUMN `Email`,
    DROP COLUMN `Image_profile`,
    DROP COLUMN `Password`,
    DROP COLUMN `Type`,
    DROP COLUMN `UpdatedAt`,
    DROP COLUMN `Username`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `image_profile` VARCHAR(191) NOT NULL,
    ADD COLUMN `password` VARCHAR(191) NOT NULL,
    ADD COLUMN `type` INTEGER NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD COLUMN `username` VARCHAR(191) NOT NULL,
    MODIFY `ID` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`ID`);

-- AlterTable
ALTER TABLE `WaitingList` DROP PRIMARY KEY,
    DROP COLUMN `Class_ID`,
    DROP COLUMN `Students_ID`,
    ADD COLUMN `class_ID` VARCHAR(191) NOT NULL,
    ADD COLUMN `students_ID` VARCHAR(191) NOT NULL,
    MODIFY `ID` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`ID`);

-- CreateIndex
CREATE UNIQUE INDEX `User_email_key` ON `User`(`email`);
