// usando ajax con jquery enviar datos del formulario Insert
$(document).ready(function() {
	$('#formulario').submit(function(e) {
		e.preventDefault();
		$.ajax({
			type: "Post",
			url: "src/controllers/insert.php",
			data: $(this).serialize(),
			success: function(resp) {
				if(resp == 1){
					rendertbody();
				} else if (resp == 0){
					alert('ERROR al insertar (ToT)');
				} else {
					alert('algun campo llego vacio..');
				}
			}
		});
	});
});

// usando ajax con jquery enviar datos del formulario Update
$(document).ready(function() {
	$('#update-form').submit(function(e) {
		e.preventDefault();
		$.ajax({
			type: "Post",
			url: "src/controllers/update.php",
			data: $(this).serialize(),
			success: function(resp) {
				if(resp == 1){
					rendertbody();
				} else if (resp == 0){
					alert('ERROR al Actualizar (ToT)');
				} else {
					alert('algun campo llego vacio..');
				}
				console.log(resp);
				quitPopup();
			}
		});
	});
});

function quitPopup(){
	if( $('#update-popup').is(":visible") ){
		$('#update-popup').css('display','none');
	}
}


// usando ajax para pedir datos y pintar la tabla con js
function rendertbody(){
	$.ajax({
		type: "Get",
		dataType: "json",
		url: "src/controllers/select.php",
		success: function(resp) {
			let tbody = document.getElementById('datos');
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
						<td>
							<a id="btnUp" class="btnUp" href="#" onclick="viewPopup(${id},'${nombre}','${apellido}','${descripcion}')">Update</a>
							<a id="btnDel" class="btnDel" href="#" onclick="delRow(${id})">Eliminar</a>
						</td>
					</tr>`
			}
		}
	});
}

function delRow(id) {
	$.ajax({
		type: "Post",
		url: "src/controllers/delete.php?",
		data: 'id='+id,
		success: function(resp) {
			if(resp == 1){
				rendertbody();
			} else if (resp == 0){
				alert('ERROR al eliminar (ToT)');
			} 
		}
	});
}

function viewPopup(id, nombre, apellido, descripcion) {
	$("#update-popup").show();
	document.getElementById("id-popup").value = id;
	document.getElementById("nombre-popup").value = nombre;
	document.getElementById("apellido-popup").value = apellido;
	document.getElementById("description-popup").value = descripcion;
}

rendertbody();