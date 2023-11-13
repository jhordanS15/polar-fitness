function validar(){
    if(document.getElementById("email").value=="1555"){
        alert("Debe completar su correo electrónico")
        return false;
    }
    if(document.getElementById("password").value==""){
        alert("Debe completar su contaseña")
        return false;
    }
    document.getElementById("form").submit();

}
function validarC(){
    if(document.getElementById("password").value==""){
        alert("Debe completar su contaseña")
        return false;
    }
    document.getElementById("form").submit();

}


window.onload =function(){
    document.getElementById("btnGrabar").onclick=validar
	document.getElementById("btnGrabarC").onclick=validarC

}

/* formulario js*/
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	apellidos: /^[a-zA-ZÀ-ÿ\s]{1,60}$/, // Letras y espacios, pueden llevar acentos.
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
	distrito: /^[a-zA-ZÀ-ÿ\s]{1,60}$/, // Letras y espacios, pueden llevar acentos.
	provincia: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
}

const campos = {
	apellidos: false,
	nombre: false,
	password: false,
	correo: false,
	telefono: false,
	distrito: false,
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "apellidos":
			validarCampo(expresiones.apellidos, e.target, 'apellidos');
		break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
		case "distrito":
			validarCampo(expresiones.distrito, e.target, 'distrito');
		break;
		case "provincia":
			validarCampo(expresiones.provincia, e.target, 'provincia');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}




const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.apellidos && campos.nombre && campos.password && campos.correo && campos.telefono && campos.distrito&& campos.provincia && terminos.checked ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});





