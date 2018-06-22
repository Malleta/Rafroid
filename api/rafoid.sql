-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 22, 2018 at 12:09 AM
-- Server version: 10.1.28-MariaDB
-- PHP Version: 7.1.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rafoid`
--

-- --------------------------------------------------------

--
-- Table structure for table `apps`
--

CREATE TABLE `apps` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `short_description` varchar(150) NOT NULL,
  `long_description` varchar(300) NOT NULL,
  `team` varchar(30) NOT NULL,
  `students` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `apps`
--

INSERT INTO `apps` (`id`, `name`, `short_description`, `long_description`, `team`, `students`) VALUES
(1, 'Rafpored', 'Aplikacija za brzo informisanje studenata o rasporedu događaja na fakultetu', 'Svi znamo osećaj kada se bliži ispit, a mi ne znamo u koliko sati počinje? U takvim kritičnim trenucima, klasičan student umesto da posveti vreme knjizi (ili prezentacijama) odlazi na materijale i skida ceo PDF sa rasporedom svih ispita kod svih profesora za sve 4 godine.\r\n\r\nPored problema sa pretrp', 'Random', 'Lazar Jelić, Stefan Živković, Marko Stojanović');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `text` varchar(300) NOT NULL,
  `appid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `user_id`, `date`, `text`, `appid`) VALUES
(22, 1, '2018-06-12 05:21:42', 'komentar', 1),
(23, 1, '2018-06-12 05:31:37', 'neki drugi kom', 1),
(24, 1, '2018-06-12 05:31:43', 'ok', 1),
(25, 1, '2018-06-12 05:31:47', 'hmm', 0),
(26, 2, '2018-06-12 05:32:38', 'da li radi', 0),
(27, 2, '2018-06-12 05:32:43', 'okk', 0),
(28, 2, '2018-06-12 05:36:39', 'kdjsfl;ajds[ioafdasg', 0),
(29, 3, '2018-06-12 05:36:57', 'yydfgh', 0),
(30, 3, '2018-06-12 05:50:28', 'dfsdf', 0),
(31, 3, '2018-06-12 17:26:54', 'fdsfsdfdsf', 0),
(32, 3, '2018-06-12 17:26:54', 'fdsfsdfdsf', 0),
(33, 3, '2018-06-12 17:27:26', 'fdgdfgdfg', 0),
(34, 3, '2018-06-12 17:27:26', 'fdgdfgdfg', 0),
(35, 3, '2018-06-12 17:27:40', 'fgdfgdf', 0),
(36, 3, '2018-06-12 17:28:07', '', 0),
(37, 3, '2018-06-12 18:07:30', 'ghgh', 0),
(38, 3, '2018-06-12 18:08:10', '', 0),
(39, 3, '2018-06-12 18:08:14', '', 0),
(40, 3, '2018-06-12 18:08:17', '', 0),
(41, 3, '2018-06-12 18:08:18', '', 0),
(42, 3, '2018-06-12 18:08:19', '', 0),
(43, 3, '2018-06-12 18:08:19', '', 0),
(44, 3, '2018-06-12 18:08:20', '', 0),
(45, 3, '2018-06-12 18:08:20', '', 0),
(46, 3, '2018-06-12 18:08:21', 'fdgdg', 0),
(47, 3, '2018-06-12 18:09:58', 'dasfdf', 0),
(48, 3, '2018-06-12 18:09:58', 'dasfdf', 0),
(49, 3, '2018-06-12 18:10:56', 'reer', 0),
(50, 3, '2018-06-12 18:11:00', '', 0),
(51, 3, '2018-06-12 18:11:01', '', 0),
(52, 3, '2018-06-12 18:11:02', '', 0),
(53, 3, '2018-06-12 18:11:03', '', 0),
(54, 3, '2018-06-12 18:11:03', '', 0),
(55, 3, '2018-06-12 18:11:04', '', 0),
(56, 3, '2018-06-12 18:11:04', '', 0),
(57, 3, '2018-06-12 18:11:04', '', 0),
(58, 3, '2018-06-12 18:11:32', '', 0),
(59, 3, '2018-06-12 18:11:35', '', 0),
(60, 3, '2018-06-12 18:11:36', '', 0),
(61, 3, '2018-06-12 18:11:36', '', 0),
(62, 3, '2018-06-12 18:11:37', '', 0),
(63, 3, '2018-06-12 18:11:37', 'gyhvghvg', 0),
(64, 3, '2018-06-12 21:59:37', 'j bb jhjhjhj', 0),
(65, 3, '2018-06-12 22:00:08', 'jkjkjkjkjkjkjkjk', 0),
(66, 1, '2018-06-12 22:24:49', 'hhhhh', 0),
(67, 1, '2018-06-13 02:58:49', 'opet ovo', 0),
(68, 1, '2018-06-13 03:04:18', 'jgfhfg', 0),
(69, 1, '2018-06-13 03:05:01', 'llll', 0),
(70, 2, '0000-00-00 00:00:00', 'sgfsfsfsdfsf', 0),
(71, 1, '0000-00-00 00:00:00', 'rrrrrrrrrrr', 0),
(72, 1, '2018-06-13 03:12:33', 'RADIIIIIIIIIII', 0),
(73, 1, '2018-06-13 03:16:40', 'a sa drugog browsera?', 0),
(74, 1, '2018-06-13 03:26:46', 'bez intervala', 0),
(75, 1, '2018-06-13 03:29:40', 'fdsfsdf', 0),
(76, 1, '2018-06-13 03:29:50', 'katarina13', 0),
(77, 1, '2018-06-13 03:43:51', 'nnn', 0),
(78, 1, '2018-06-13 03:45:24', 'qwqw', 0),
(79, 1, '2018-06-13 04:37:40', 'eee', 0),
(80, 1, '2018-06-13 04:37:50', 'eee', 0),
(81, 1, '2018-06-13 14:19:32', '', 0),
(82, 1, '2018-06-13 03:45:28', 'novi kpomm', 0),
(83, 1, '2018-06-13 14:39:07', 'aliii', 0),
(84, 1, '2018-06-13 14:19:39', 'asdhalkjd', 0),
(85, 1, '2018-06-13 18:05:33', 'komic', 0),
(86, 1, '2018-06-13 18:09:39', 'stranicaaa', 0),
(87, 1, '2018-06-13 19:04:50', 'novi komm', 0),
(88, 1, '2018-06-13 19:07:43', 'radi stranicaaa', 0),
(89, 1, '2018-06-13 19:07:48', 'yayyyyyyy', 0),
(90, 1, '2018-06-13 23:45:52', 'DESC', 0),
(91, 1, '2018-06-14 02:00:39', 'iuoiuo', 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `valid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `code`, `valid`) VALUES
(1, 'klazic16@raf.rs', '9f079470c712a3dc83c065c30b4a9905', '0', 1),
(2, 'unovakovic16@raf.rs', '202cb962ac59075b964b07152d234b70', '4ff1c762c876c0a', 1),
(64, 'admin', 'admin', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `votes`
--

CREATE TABLE `votes` (
  `id` int(11) NOT NULL,
  `voter` int(11) NOT NULL,
  `app` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `votes`
--

INSERT INTO `votes` (`id`, `voter`, `app`) VALUES
(3, 1, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `apps`
--
ALTER TABLE `apps`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `votes`
--
ALTER TABLE `votes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `apps`
--
ALTER TABLE `apps`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=92;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT for table `votes`
--
ALTER TABLE `votes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
