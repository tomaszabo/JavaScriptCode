clickBotonRedirecion = (boton, pagina) => {
	boton.onclick = () => {
		location.href = pagina;
	};
};

usuarioIngresado = () => {
	const usIngrStora = localStorage.getItem("usuarioIngresado");
	const usuarioCuenta = JSON.parse(usIngrStora);
	return usuarioCuenta;
};

//--funcion para poner el usuario y dni en la esquina--
const usuarioIng = document.querySelectorAll(".nombre-usuario-ing")[0];
const dniIng = document.querySelectorAll(".dni-usuario-ing")[0];

infoUsuario = (nombreElemento, dniElemento, usuario) => {
	nombreElemento.textContent = usuario.nombre;
	dniElemento.textContent = usuario.dni;
};

const botSalir = document.querySelectorAll(".salir")[0];
const botVolver = document.querySelectorAll(".volver")[0];

salirDeCuenta = () => {
	botSalir.onclick = () => {
		localStorage.removeItem("usuarioIngresado");
		location.href = "/index.html";
	};
};
