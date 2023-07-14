/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `user`;

-- CreateTable
CREATE TABLE `users` (
    `username` VARCHAR(100) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `token` VARCHAR(100) NULL,

    PRIMARY KEY (`username`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `smartphones` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `brand` VARCHAR(100) NOT NULL,
    `RAM` VARCHAR(100) NOT NULL,
    `room` VARCHAR(100) NOT NULL,
    `processor` VARCHAR(100) NOT NULL,
    `price` VARCHAR(100) NOT NULL,
    `image` VARCHAR(100) NULL,
    `camera` VARCHAR(100) NULL,
    `category` VARCHAR(100) NOT NULL,
    `desc` VARCHAR(100) NOT NULL,
    `link` VARCHAR(100) NOT NULL,
    `release_date` VARCHAR(100) NOT NULL,
    `A1` INTEGER NOT NULL,
    `A2` INTEGER NOT NULL,
    `A3` INTEGER NOT NULL,
    `A4` INTEGER NOT NULL,
    `A5` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
