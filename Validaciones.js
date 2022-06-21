const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const edad = document.getElementById("edad");
const sexo = document.getElementById("radio");
const temas = document.getElementById("temas")
const pais = document.getElementById("pais")
const form = document.getElementById("form");
const listInputs = document.querySelectorAll(".input");

form.addEventListener("submit", (e) =>{
	e.preventDefault();
	let condicion = validacionForm();
	if(condicion){
		enviarFormulario();
	}
});

function validacionForm(){
	form.lastElementChild.innerHTML = "";
	let condicion = true;
	listInputs.forEach((element) => {
		element.lastElementChild.innerHTML = "";
	})

	if (nombre.value.length < 3 || nombre.value.trim() == "") {
		mostrarMensajeError("nombre", "campo obligatorio - el nombre debe tener mas de 3 caracteres*")
		condicion = false;
	}
	if (apellido.value.length < 3 || apellido.value.trim() == "") {
		mostrarMensajeError("apellido", "campo obligatorio - el apellido debe tener mas de 3 caracteres*")
		condicion = false;
	}
	if (email.value.trim() == "" || (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(email))) {
		mostrarMensajeError("email", "campo obligatorio*")
		condicion = false;
	}

	if (edad.value.trim() == "" || edad.value > 100 && edad.value < 0) {
		mostrarMensajeError("edad", "campo obligatorio - tiene que ser una edad valida")
		condicion = false;
	}

	if (document.getElementById("hombre").checked || document.getElementById("mujer").checked ||  document.getElementById("otro").checked) {
		condicion = false;
	}
	else{
		mostrarMensajeError("sexo", "campo obligatorio - Debes seleccionar una opcion")
	}

	if (document.getElementById("musica").checked || document.getElementById("deporte").checked ||  document.getElementById("juegos").checked ||  document.getElementById("tecnologia").checked) {
		condicion = false;
	}
	else{
		mostrarMensajeError("temas", "campo obligatorio - Debes seleccionar una opcion")
	}

	if (pais.value == 0) {
		mostrarMensajeError("pais", "campo obligatorio - Debes seleccionar una opcion")
	}
	return condicion
}	

function mostrarMensajeError(claseInput, mensaje) {
	let elemento = document.querySelector(`.${claseInput}`);
	elemento.lastElementChild.innerHTML = mensaje;
}

function enviarFormulario(){
	form.reset();
	form.lastElementChild.innerHTML = "El formulario se envio con exito!"
}
