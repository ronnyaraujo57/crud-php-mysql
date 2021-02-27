//usando ajax con jquery enviar datos del formulario
$(document).ready(function() {
	$('#formulario').submit(function(e) {
		e.preventDefault();
		$.ajax({
			type: "Post",
			url: "src/controllers/insert.php",
			data: $(this).serialize(),
			success: function(resp) {
				if(resp == "1"){
					rendertbody();
				} else if (resp == "0"){
					alert('ERROR al insertar (ToT)');
				} else {
					alert('algun campo llego vacio..');
				}
			}
		});
	});
});

function rendertbody(){
	$.ajax({
		type: "Get",
		dataType: "json",
		url: "src/controllers/select.php",
		success: function(resp) {
			let tbody = document.getElementById('datos');
			console.log(resp);
			tbody.innerHTML = '';
			for(let i = 0; i < resp.length; i++){
				
				let id = resp[i].id;
				let nombre = resp[i].nombre;
				let apellido = resp[i].apellido;
				let descripcion = resp[i].descripcion;

				tbody.innerHTML += `
					<tr>
						<td>${id}</td>
						<td>${nombre}</td>
						<td>${apellido}</td>
						<td>${descripcion}</td>
						<td>Accion</td>
					</tr>`
			}
		}
	});
}

rendertbody();

