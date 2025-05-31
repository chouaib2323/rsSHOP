-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 27, 2024 at 04:20 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fin`
--

-- --------------------------------------------------------

--
-- Table structure for table `commandes`
--

CREATE TABLE `commandes` (
  `id` int(11) NOT NULL,
  `nomcl` varchar(30) NOT NULL,
  `address_clt` varchar(200) DEFAULT NULL,
  `phone` int(14) NOT NULL,
  `nomprd` varchar(30) NOT NULL,
  `prix` int(30) NOT NULL,
  `qnt` int(10) NOT NULL,
  `paiment` varchar(255) DEFAULT NULL,
  `wilaya` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `commandes`
--

INSERT INTO `commandes` (`id`, `nomcl`, `address_clt`, `phone`, `nomprd`, `prix`, `qnt`, `paiment`, `wilaya`) VALUES
(177, 'chouaib', 'hai 20 mai', 5345353, 'INTEL FCLG 1700 I9-14900KF BOX', 123900, 2, 'paiment eldahabya', 'Oum El Bouaghi'),
(178, 'chouaib', 'hai 20 mai', 5345353, 'GIGABYTE X670E AORUS MASTER AM', 129900, 1, 'paiment eldahabya', 'Oum El Bouaghi'),
(179, 'chouaib', 'hai 20 mai', 5345353, 'INNO3D RTX 4080 16GB X3 GDDR6X', 275000, 1, 'paiment eldahabya', 'Oum El Bouaghi'),
(180, 'chouaib', 'hai 20 mai', 5345353, 'CASE XIGMATEK PERSEUS 5 FANS R', 22000, 1, 'paiment eldahabya', 'Oum El Bouaghi');

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` int(11) NOT NULL,
  `nom` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `message` varchar(130) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `nom`, `email`, `message`) VALUES
(2, 'chouaib', 'fdsfsddfs', 'rfzsfsdfdsfsdfs');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `nom` varchar(30) NOT NULL,
  `prix` int(40) NOT NULL,
  `image` varchar(70) NOT NULL,
  `category` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `nom`, `prix`, `image`, `category`) VALUES
(8, 'ASUS ROG STRIX X670E-F GAMING	', 110000, '661703c4afe44.jpg', 'motherboard'),
(9, 'GIGABYTE X670E AORUS MASTER AM', 129900, '661704202fc05.jpg', 'motherboard'),
(10, 'INTEL FCLG 1700 I9-14900KF BOX', 123900, '6617046685c94.jpg', 'cpu'),
(11, 'NZXT H7 Flow RGB BLACK', 43900, '661707ba2ad51.jpg', 'case'),
(12, 'NZXT H7 Flow RGB White', 45900, '661707d0b726f.jpg', 'case'),
(13, 'INNO3D RTX 4080 16GB X3 GDDR6X', 275000, '66170b3be0756.jpg', 'gpu'),
(14, 'ASUS DUAL NVIDIA RTX4070 SUPER', 176000, '66170b596cdc8.jpg', 'gpu'),
(15, 'GIGABYTE RTX 3060TI WINDFORCE ', 82000, '66170b77eb746.jpg', 'gpu'),
(16, 'GPU NVIDIA GTX 1650 4GB MSI VE', 37000, '66170b9edde8f.jpg', 'gpu'),
(17, 'GPU AMD RADEON RX 6600XT XFX S', 60000, '66170bbb92b6f.jpg', 'gpu'),
(18, 'CASE XIGMATEK PERSEUS 5 FANS R', 22000, '663dfd97c13ca.jpg', 'case'),
(19, 'ASUS ROG SWIFT PG27AQDM 2K OLE', 22000, '663e00c228208.jpg', 'monitor'),
(20, 'MONITOR SAMSUNG S24D332H 24P 1', 29000, '663e01040cee7.jpg', 'monitor'),
(21, 'LAPTOP MSI KATANA 15B12VFK 15P', 23900, '663e01720ca8d.jpg', 'laptop');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`) VALUES
(4, 'admin', 'chouaibe2019@gmail.com', '$2y$10$sqkXB9NhYeoq9cPvtWuIj.kI7iCo0OXTOd.4K/yimWI4qjojn.7wW'),
(5, 'chouaib', 'chou@gmail.com', '$2y$10$Ac3UidSdWAI99KrKGImE8usx3dwgCulKgJ9/hCbWpdrpVCm5khIC2'),
(7, 'chou', 'chouaib@gmail.com', '$2y$10$UIT9V73QqtOUb4grxsls4uqttKI.VLoW/oT8TYtneebKH5sfik7F.'),
(8, 'chouaib22', 'cho@gmail.com', '$2y$10$z/uPWvABJ.0EbTmN2SC9Cu6IOf0Ke2ISpu1SfRA.XecHK2Qr0n6Ae');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `commandes`
--
ALTER TABLE `commandes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_product_name` (`nomcl`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `commandes`
--
ALTER TABLE `commandes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=183;

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
