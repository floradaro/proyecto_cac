-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-07-2024 a las 03:24:30
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `peliculas_cac_java`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `peliculas`
--

CREATE TABLE `peliculas` (
  `id_pelicula` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `genero` varchar(255) NOT NULL,
  `duracion` varchar(255) NOT NULL,
  `imagen` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `peliculas`
--

INSERT INTO `peliculas` (`id_pelicula`, `titulo`, `genero`, `duracion`, `imagen`) VALUES
(1, 'Intensamente 2', 'Infantil', '1h 36m', 'intensamente2.jpg'),
(2, 'Deadpool 3', 'Accion / Comedia', '2h 07m', 'deadpool.jpg'),
(3, 'Joker: Folie a Deux', 'Musical / Suspenso', '1h 56m', 'joker.jpg'),
(4, 'Godzilla y Kong: el nuevo imperio', 'Accion / Ciencia ficcion', '1h 55m', 'kong.jpg'),
(5, 'Fly me to the Moon', 'Romance / Comedia', '2h 11m', 'luna.jpg'),
(6, 'No way up', 'Suspenso / Accion', '1h 35m', 'no way up.jpg'),
(7, 'El planeta de los simios: Nuevo reino', 'Accion / Ciencia ficcion', '2h 25m', 'planetadelossimios.jpg'),
(8, 'Un lugar en el silecion: Dia uno', 'Suspenso', '1h 65m', 'unlugar.jpg'),
(9, 'Tornados', 'Accion / Suspenso', '2h 02m', 'tornados.jpg'),
(10, 'Tarot de la muerte', 'Terror Sobrenatural', '1h 32m', 'tarot.jpg'),
(11, 'Mi villano favorito 4', 'Infantil / Comedia', '1h 34m', 'mivillano.jpg'),
(12, 'The Exorcism', 'Terror / Fantasia', '1h 33m', 'exorcismo.jpg'),
(13, 'Furiosa: de la saga Mad Max', 'Accion / Aventura', '2h 28m', 'furiosa.jpg'),
(14, 'Bad Boys 4', 'Accion / Comedia', '1h 55m', 'badboys.jpg'),
(15, 'Dune: parte dos', 'Ciencia ficcion / Aventura', '2h 46m', 'dune-parte-dos.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `peliculas`
--
ALTER TABLE `peliculas`
  ADD PRIMARY KEY (`id_pelicula`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `peliculas`
--
ALTER TABLE `peliculas`
  MODIFY `id_pelicula` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
