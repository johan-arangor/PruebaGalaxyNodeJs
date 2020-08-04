-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 04, 2020 at 10:59 AM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `galaxy`
--
CREATE DATABASE galaxy
-- --------------------------------------------------------

--
-- Table structure for table `contratos`
--

CREATE TABLE `contratos` (
  `Id` int(11) NOT NULL,
  `NumContrato` int(11) NOT NULL,
  `IdTrabajador` int(11) NOT NULL,
  `IdEntidad` int(11) DEFAULT NULL,
  `Finicio` datetime NOT NULL,
  `FFin` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contratos`
--

INSERT INTO `contratos` (`Id`, `NumContrato`, `IdTrabajador`, `IdEntidad`, `Finicio`, `FFin`) VALUES
(1, 1234123412, 1, 1, '2020-06-08 00:00:00', '2020-10-07 00:00:00'),
(2, 231245124, 2, 2, '2020-05-16 00:00:00', '2020-11-28 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `entidad`
--

CREATE TABLE `entidad` (
  `Id` int(11) NOT NULL,
  `Nombre` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `entidad`
--

INSERT INTO `entidad` (`Id`, `Nombre`) VALUES
(1, 'Casa de Reyes'),
(2, 'Casas S.A.S');

-- --------------------------------------------------------

--
-- Table structure for table `trabajador`
--

CREATE TABLE `trabajador` (
  `Id` int(11) NOT NULL,
  `TDocumento` varchar(11) NOT NULL,
  `NDocumento` int(18) NOT NULL,
  `PNombre` varchar(50) DEFAULT NULL,
  `SNombre` varchar(50) DEFAULT NULL,
  `PApellido` varchar(50) DEFAULT NULL,
  `SApellido` varchar(50) DEFAULT NULL,
  `FNacimiento` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `trabajador`
--

INSERT INTO `trabajador` (`Id`, `TDocumento`, `NDocumento`, `PNombre`, `SNombre`, `PApellido`, `SApellido`, `FNacimiento`) VALUES
(1, 'CC', 1128391817, 'Johan', 'Alexis', 'Arango', 'Rueda', '1988-10-21 00:00:00'),
(2, 'CC', 1066750169, 'Licet', 'Tatiana', 'Cartagena', 'Giraldo', '1997-01-27 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contratos`
--
ALTER TABLE `contratos`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `entidad`
--
ALTER TABLE `entidad`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `trabajador`
--
ALTER TABLE `trabajador`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contratos`
--
ALTER TABLE `contratos`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `entidad`
--
ALTER TABLE `entidad`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `trabajador`
--
ALTER TABLE `trabajador`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
