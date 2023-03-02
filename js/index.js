const botIngresar = document.getElementById("ingresar");
const botNuevo = document.getElementById("nuevo");
const usuarioIngresado = document.getElementById("nombreApellido");
const dniUsuario = document.getElementById("dni");

const usuario = [];

usuario.push(new Persona("Tomas Szabo", "39163554", 1234, 1070000, 5090, 20));
usuario.push(new Persona("Ruben Perez", "3998983", 2563, 756000, 0, 0));
usuario.push(new Persona("Roza Gomez", "67258688", 2975, 0, 500, 20000));

botIngresar.onclick = () => {
	if (usuario.find(persona => persona.nombre = usuarioIngresado.value)) {
		alert("hola");
	} else {
		alert("nono");
	}
	// let tomas = usuario.find(persona => persona.nombre = usuarioIngresado.value)
	// console.log(tomas)
};
