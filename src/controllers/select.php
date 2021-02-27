<?php 
	include('connection.php');

	$data = $conexion->query("SELECT * FROM test_crud.tarea");
	$resp = array();
	while ($row = mysqli_fetch_assoc($data)) {
		array_push($resp, $row);
	}
	
	echo json_encode($resp);
?>