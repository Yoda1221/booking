-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Gép: localhost
-- Létrehozás ideje: 2022. Már 22. 19:32
-- Kiszolgáló verziója: 10.4.21-MariaDB
-- PHP verzió: 8.0.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `booking_test`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `books`
--

CREATE TABLE `books` (
  `id` int(11) NOT NULL,
  `users_id` int(11) NOT NULL,
  `holtels_id` int(11) NOT NULL,
  `rooms_id` int(11) NOT NULL,
  `arrival` timestamp NOT NULL DEFAULT current_timestamp(),
  `getaway` timestamp NOT NULL DEFAULT current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- A tábla adatainak kiíratása `books`
--

INSERT INTO `books` (`id`, `users_id`, `holtels_id`, `rooms_id`, `arrival`, `getaway`, `created_at`, `updated_at`) VALUES
(1, 2, 4, 20, '2022-03-21 13:00:00', '2022-03-21 09:00:00', '2022-03-22 16:19:40', '2022-03-22 16:19:40');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `hotels`
--

CREATE TABLE `hotels` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL DEFAULT '',
  `stars` int(5) NOT NULL DEFAULT 4,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- A tábla adatainak kiíratása `hotels`
--

INSERT INTO `hotels` (`id`, `name`, `stars`, `created_at`, `updated_at`) VALUES
(1, 'NOVOTEL', 4, '2022-03-18 19:17:44', '2022-03-18 19:17:44'),
(2, 'Continental', 4, '2022-03-18 19:20:06', '2022-03-18 19:54:10'),
(3, 'Shiraz', 4, '2022-03-18 19:20:28', '2022-03-18 19:20:28'),
(4, 'For Seasons', 5, '2022-03-18 19:21:46', '2022-03-18 20:12:35'),
(5, 'Hotel Lővér', 3, '2022-03-18 19:22:04', '2022-03-18 20:12:46');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `rooms`
--

CREATE TABLE `rooms` (
  `id` int(11) NOT NULL,
  `hotels_id` int(11) NOT NULL,
  `number` int(10) NOT NULL DEFAULT 0,
  `squaremeter` varchar(10) NOT NULL DEFAULT '16',
  `price` int(10) NOT NULL,
  `reserved` set('i','n') CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL DEFAULT 'n',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- A tábla adatainak kiíratása `rooms`
--

INSERT INTO `rooms` (`id`, `hotels_id`, `number`, `squaremeter`, `price`, `reserved`, `created_at`, `updated_at`) VALUES
(1, 1, 101, '24', 10000, 'i', '2022-03-18 19:55:10', '2022-03-20 16:19:45'),
(2, 1, 102, '24', 10000, 'n', '2022-03-18 19:55:10', '2022-03-18 19:57:02'),
(3, 1, 103, '30', 15000, 'i', '2022-03-18 19:55:10', '2022-03-20 16:19:48'),
(4, 1, 104, '40', 20000, 'n', '2022-03-18 19:55:10', '2022-03-18 19:57:07'),
(5, 1, 105, '45', 30000, 'n', '2022-03-18 19:55:10', '2022-03-18 19:57:07'),
(6, 2, 101, '26', 10000, 'n', '2022-03-18 19:55:10', '2022-03-18 19:58:37'),
(7, 2, 102, '28', 14000, 'n', '2022-03-18 19:55:10', '2022-03-18 19:58:37'),
(8, 2, 103, '32', 18000, 'n', '2022-03-18 19:55:10', '2022-03-18 19:58:37'),
(9, 2, 104, '38', 22000, 'n', '2022-03-18 19:55:10', '2022-03-18 19:58:37'),
(10, 2, 105, '48', 34000, 'n', '2022-03-18 19:55:10', '2022-03-18 19:58:37'),
(11, 3, 101, '24', 10000, 'i', '2022-03-18 19:55:10', '2022-03-20 16:19:52'),
(12, 3, 102, '28', 14000, 'n', '2022-03-18 19:55:10', '2022-03-18 19:58:37'),
(13, 3, 103, '34', 18000, 'n', '2022-03-18 19:55:10', '2022-03-18 19:58:37'),
(14, 3, 104, '40', 22000, 'n', '2022-03-18 19:55:10', '2022-03-18 19:58:37'),
(15, 3, 105, '46', 34000, 'n', '2022-03-18 19:55:10', '2022-03-18 19:58:37'),
(16, 4, 101, '34', 24000, 'n', '2022-03-18 19:55:10', '2022-03-18 19:58:37'),
(17, 4, 102, '34', 24000, 'n', '2022-03-18 19:55:10', '2022-03-18 19:58:37'),
(18, 4, 103, '40', 28000, 'n', '2022-03-18 19:55:10', '2022-03-18 19:58:37'),
(19, 4, 104, '46', 30000, 'i', '2022-03-18 19:55:10', '2022-03-20 16:20:00'),
(20, 4, 105, '52', 50000, 'i', '2022-03-18 19:55:10', '2022-03-22 16:19:40');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL DEFAULT '',
  `email` varchar(100) CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL DEFAULT '',
  `password` varchar(100) CHARACTER SET utf8 COLLATE utf8_hungarian_ci NOT NULL DEFAULT '',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- A tábla adatainak kiíratása `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `created_at`, `updated_at`) VALUES
(1, 'Yoda', 'yoda@email.hu', '$2a$10$h/nIu5nnO0lI7YCzylHq1.kNXfoFzsyOwQh3i.tcNGmZ1rWkV9N2.', '2022-03-14 18:11:05', '2022-03-14 18:11:05'),
(2, 'Darth Vader', 'vader@email.hu', '$2a$10$955WQqabPZlNxjvFBz0giuEUGlLiCore13NfiL6UmyC1SgXCFrGB.', '2022-03-14 18:12:34', '2022-03-14 18:12:34');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `hotels`
--
ALTER TABLE `hotels`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `books`
--
ALTER TABLE `books`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT a táblához `hotels`
--
ALTER TABLE `hotels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT a táblához `rooms`
--
ALTER TABLE `rooms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT a táblához `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
