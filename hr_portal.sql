-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 25, 2024 at 01:55 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hr_portal`
--

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `id` int(11) NOT NULL,
  `employee_id` int(11) NOT NULL,
  `employee_name` varchar(255) NOT NULL,
  `address` text NOT NULL,
  `gender` varchar(255) NOT NULL,
  `contact_no` bigint(20) NOT NULL,
  `other_contact_no` bigint(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `team_name` varchar(255) NOT NULL,
  `joining_date` datetime NOT NULL,
  `birth_date` datetime NOT NULL,
  `bank_name` varchar(255) NOT NULL,
  `bank_holder_name` varchar(255) NOT NULL,
  `account_no` bigint(20) NOT NULL,
  `ifsc_code` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`id`, `employee_id`, `employee_name`, `address`, `gender`, `contact_no`, `other_contact_no`, `email`, `team_name`, `joining_date`, `birth_date`, `bank_name`, `bank_holder_name`, `account_no`, `ifsc_code`, `createdAt`, `updatedAt`) VALUES
(2, 111, 'aniket', '22,station,surat', 'Male', 1233456789, 1234567890, 'abcd@gmail.com', 'Centrix', '2024-01-23 00:00:00', '2024-01-23 00:00:00', 'sbi', 'aniket', 12345678901234, 'AAVV0123456', '2024-01-23 09:14:58', '2024-01-25 09:16:50'),
(4, 199, 'sagar', '88,jk road ,surat', 'Male', 4346345645, 3456346555, 'aa@gmail.com', 'Reservation', '2024-01-23 00:00:00', '2024-01-23 00:00:00', 'bob', 'sagar', 45345345454444, 'AAAA0123456', '2024-01-23 09:19:23', '2024-01-25 09:15:56'),
(5, 200, 'paras patel', '44,main road,surat', 'Male', 4346345645, 3456346555, 'paras@gmail.com', 'Reservation', '2024-01-23 00:00:00', '2000-01-01 00:00:00', 'axis', 'paras patel', 45345345454444, 'AAAA0123456', '2024-01-23 09:22:38', '2024-01-25 09:15:17'),
(9, 12, 'amit patel', '33,dumas road,vesu,surat', 'Male', 1233458765, 1234455677, 'abcd@gmail.com', 'Absolute', '2024-01-25 00:00:00', '2000-01-01 00:00:00', 'sbi', 'amit patel', 12342233333333, 'AVXX0123456', '2024-01-24 07:26:34', '2024-01-25 09:14:12'),
(10, 88, 'Aj', '24,main road,surat', 'Male', 9999999999, 8805465645, 'aj@gmail.com', 'Integration', '2024-01-27 00:00:00', '1990-02-03 00:00:00', 'bob', 'aj', 12334456677890, 'ABCD0123456', '2024-01-25 06:48:11', '2024-01-25 11:20:16');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
