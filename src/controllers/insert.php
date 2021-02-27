<?php 
	include('connection.php');

	if (isset($_POST["nombre"]) && $_POST["nombre"] && isset($_POST["apellido"]) && $_POST["apellido"] && isset($_POST["descrip"]) && $_POST["descrip"]){

		$nombre = $_POST["nombre"];
		$apellido = $_POST["apellido"];
		$descrip = $_POST["descrip"];

		$respuesta = $conexion->query("INSERT INTO test_crud.tarea (nombre, apellido, descripcion) VALUES ('$nombre', '$apellido', '$descrip')");

		echo $respuesta;

	} else {
		echo "*";
	}
?>