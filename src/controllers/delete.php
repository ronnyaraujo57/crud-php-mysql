 <?php 
	include('connection.php');

	if (isset($_POST["id"]) && $_POST["id"]){

		$id = $_POST["id"];

		$respuesta = $conexion->query("DELETE FROM test_crud.tarea WHERE id = $id");

		echo $respuesta;

	}
?>