const botIngresar = document.getElementById("ingresar");
const botNuevo = document.getElementById("nuevo");
const usuarioIngresado = document.getElementById("nombreApellido");
const dniUsuario = document.getElementById("dni");

const usuario = [];

usuario.push(new Persona("Tomas Szabo", "39163554", 1234, 1070000, 5090, 20));
usuario.push(new Persona("Ruben Perez", "3998983", 2563, 756000, 0, 0));
usuario.push(new Persona("Roza Gomez", "67258688", 2975, 0, 500, 20000));

botIngresar.onclick = () => {
	const ingUsuario = usuario.find((persona) => persona.nombre == usuarioIngresado.value);
	const ingDni = usuario.find((persona) => persona.dni == dniUsuario.value);

	if (ingUsuario == ingDni && ingDni != undefined) {
		localStorage.setItem("usuarioIngresado", JSON.stringify(ingUsuario));

		const Toast = Swal.mixin({
			toast: true,
			position: "top-end",
			showConfirmButton: false,
			timer: 2000,
			timerProgressBar: true,
		});
		Toast.fire({
			icon: "success",
			title: "Usuario y DNI correcto",
		}).finally(() => {
			location.href = "/pag/cuenta-usuario.html";
		});
	} else {
		Swal.fire({
			title: "No está registrado como cliente",
			text: "¿Desea registrarse?",
			icon: "error",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Registrarme!",
			cancelButtonText: "Cancelar",
		}).then((result) => {
			if (result.isConfirmed) {
				location.href = "./pag/registro.html";
			}
		});
	}
};
clickBoton(botNuevo, "./pag/registro.html");
