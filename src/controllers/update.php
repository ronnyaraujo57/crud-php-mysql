 <?php 
	include('connection.php');

	if (isset($_POST["id-popup"]) && $_POST["id-popup"] &&isset($_POST["nombre-popup"]) && $_POST["nombre-popup"] && isset($_POST["apellido-popup"]) && $_POST["apellido-popup"] && isset($_POST["descrip-popup"]) && $_POST["descrip-popup"]){

		$id = $_POST["id-popup"];
		$nombre = $_POST["nombre-popup"];
		$apellido = $_POST["apellido-popup"];
		$descrip = $_POST["descrip-popup"];
		
		$respuesta = $conexion->query("UPDATE test_crud.tarea SET nombre = '$nombre', apellido = '$apellido', descripcion = '$descrip' WHERE id = $id");

		echo $respuesta;

	} else {
		echo "*";
	}
?>