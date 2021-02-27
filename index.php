<?php include('src/views/header.php'); ?>

<link rel="stylesheet" href="src/css/estilos.css">

<body>
	<header class="header">
		<h1>Registro de tareas</h1>
	</header>
	<section>
		<form id="formulario" class="form" method="post">
			<input type="text" name="nombre" id="nombre" placeholder="nombre">
			<input type="text" name="apellido" id="apellido" placeholder="apellido">
			<textarea name="descrip" id="description" rows="4" cols="27" placeholder="Descripcion tarea"></textarea>
			<div class="form-button">
				<input id="reset" type="reset" value="Cancelar"></input>
				<button>Agregar</button>
			</div>
		</form>
	</section>
	<section class="data_table">
		<table>
			<thead>
				<tr>
					<th>ID</th>
					<th>Nombre</th>
					<th>Apellido</th>
					<th>Descripcion</th>
					<th>Accion</th>
				</tr>
			</thead>
			<tbody id="datos"></tbody>
		</table>
	</section>
	<script type="text/javascript" src="src/jquery/funcions.js"></script>
	
<?php include 'src/views/footer.php' ?>