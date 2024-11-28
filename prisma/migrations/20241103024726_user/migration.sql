-- CreateTable
CREATE TABLE `User` (
    `ID` INTEGER NOT NULL,
    `Username` VARCHAR(191) NOT NULL,
    `Type` INTEGER NOT NULL,
    `CreatedAt` DATETIME(3) NOT NULL,
    `UpdatedAt` DATETIME(3) NOT NULL,
    `Email` VARCHAR(191) NOT NULL,
    `Password` VARCHAR(191) NOT NULL,
    `Image_profile` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `User_Email_key`(`Email`),
    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Class` (
    `ID` INTEGER NOT NULL,
    `Description` VARCHAR(191) NOT NULL,
    `Active` INTEGER NOT NULL,
    `Value` DOUBLE NOT NULL,
    `Schedule` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL,
    `updatedAt` DATETIME(3) NOT NULL,
    `ProfessorsClass_ID` INTEGER NOT NULL,
    `MaxStudents` INTEGER NOT NULL,
    `WaitingList_ID` INTEGER NOT NULL,

    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Students` (
    `ID` INTEGER NOT NULL,
    `Name` VARCHAR(191) NOT NULL,
    `Active` INTEGER NOT NULL,
    `Birthday` DATETIME(3) NOT NULL,
    `Cep` INTEGER NOT NULL,
    `Number` INTEGER NOT NULL,
    `CreatedAt` DATETIME(3) NOT NULL,
    `UpdatedAt` DATETIME(3) NOT NULL,
    `State` VARCHAR(191) NOT NULL,
    `City` VARCHAR(191) NOT NULL,
    `Membership_ID` INTEGER NOT NULL,
    `Nickname` VARCHAR(191) NOT NULL,
    `SocialName` VARCHAR(191) NOT NULL,
    `TransmitionList_ID` INTEGER NOT NULL,
    `User_ID` INTEGER NOT NULL,

    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StudentsClass` (
    `ID` INTEGER NOT NULL,
    `StudentsID` INTEGER NOT NULL,
    `ClassID` INTEGER NOT NULL,

    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Professors` (
    `ID` INTEGER NOT NULL,
    `Name` VARCHAR(191) NOT NULL,
    `Active` INTEGER NOT NULL,
    `Salary` DOUBLE NOT NULL,
    `CreatedAt` DATETIME(3) NOT NULL,
    `UpdatedAt` DATETIME(3) NOT NULL,
    `ProfessorsClass_ID` INTEGER NOT NULL,
    `StartedAt` DATETIME(3) NOT NULL,
    `FinishedAt` DATETIME(3) NOT NULL,
    `TransmitionList_ID` INTEGER NOT NULL,
    `User_ID` INTEGER NOT NULL,

    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProfessorsClass` (
    `ID` INTEGER NOT NULL,
    `ProfessorsID` INTEGER NOT NULL,
    `ClassID` INTEGER NOT NULL,

    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TransmitionList` (
    `ID` INTEGER NOT NULL,
    `Description` VARCHAR(191) NOT NULL,
    `CreatedAt` DATETIME(3) NOT NULL,
    `UpdatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `WaitingList` (
    `ID` INTEGER NOT NULL,
    `Students_ID` INTEGER NOT NULL,
    `Class_ID` INTEGER NOT NULL,

    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AttendanceList` (
    `ID` INTEGER NOT NULL,
    `Presence` INTEGER NOT NULL,
    `CreatedAt` DATETIME(3) NOT NULL,
    `UpdatedAt` DATETIME(3) NOT NULL,
    `DateList` DATETIME(3) NOT NULL,
    `Class_ID` INTEGER NOT NULL,
    `Class_ProfessorsClass_ID` INTEGER NOT NULL,
    `Class_WaitingList_ID` INTEGER NOT NULL,
    `Students_ID` INTEGER NOT NULL,
    `Students_Membership_ID` INTEGER NOT NULL,
    `Students_TransmitionList_ID` INTEGER NOT NULL,

    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Membership` (
    `ID` INTEGER NOT NULL,
    `Cost` DOUBLE NOT NULL,
    `Type` VARCHAR(191) NOT NULL,
    `Description` VARCHAR(191) NOT NULL,
    `CreatedAt` DATETIME(3) NOT NULL,
    `UpdatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Notification` (
    `ID` INTEGER NOT NULL,
    `Message` VARCHAR(191) NOT NULL,
    `Title` VARCHAR(191) NOT NULL,
    `CreatedAt` DATETIME(3) NOT NULL,
    `UpdatedAt` DATETIME(3) NOT NULL,
    `TransmitionList_ID` INTEGER NOT NULL,
    `ProfessorID` INTEGER NOT NULL,
    `StudentID` INTEGER NOT NULL,

    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
