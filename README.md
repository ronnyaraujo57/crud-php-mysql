# crud-php-mysql

Este proyecto funciona con la siguiente estructura de base de dato

CREATE TABLE `tarea` (
  `id` int(11) NOT NULL,
  `nombre` varchar(25) NOT NULL,
  `apellido` varchar(25) NOT NULL,
  `descripcion` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE `tarea`
  ADD PRIMARY KEY (`id`);


Como su nombre indica es un CRUD con php y mysql tambien tiene HTML, CSS, JavaScript, jquery y ajax.
