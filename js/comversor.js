let usuarioCuenta = usuarioIngresado();

infoUsuario(usuarioIng, dniIng, usuarioCuenta);

const montoIngresado = document.getElementById("monto");
const monedaQueTengo = document.getElementById("tengo");
const monedaQueQuiero = document.getElementById("quiero");
const meQueda = document.getElementById("resultado");
const botonComvertir = document.getElementById("comvertir");
const cuenta1 = document.getElementById("montoDeCuenta1");
const cuenta2 = document.getElementById("montoDeCuenta2");

const cuentas = {
	ARG: usuarioCuenta.cuentaPesos,
	EUR: usuarioCuenta.cuentaEuros,
	USD: usuarioCuenta.cuentaDolares,
};

cantidadEnCuenta = (elemento, cuenta) => {
	let valor = cuentas[cuenta];
	elemento.innerHTML = valor;
};

const actualizarMontos = () => {
	const tengoValor = monedaQueTengo.value;
	const quieroValor = monedaQueQuiero.value;

	cantidadEnCuenta(cuenta1, tengoValor);
	cantidadEnCuenta(cuenta2, quieroValor);
};

function convertir() {
	const tengoEnCuenta1 = parseFloat(cuenta1.textContent);
	const tengoEnCuenta2 = parseFloat(cuenta2.textContent);
	const monto = parseFloat(montoIngresado.value);
	const deMoneda = monedaQueTengo.value;
	const aMoneda = monedaQueQuiero.value;
	const usuario = usuarioCuenta;

	if (deMoneda === aMoneda) {
		meQueda.value = "";
		const Toast = Swal.mixin({
			toast: true,
			position: "top-end",
			showConfirmButton: false,
			timer: 1500,
			timerProgressBar: true,
		});
		Toast.fire({
			icon: "error",
			title: "No se puede convertir entre la misma divisa",
		});
	} else if (tengoEnCuenta1 <= monto) {
		meQueda.value = "";
		const Toast = Swal.mixin({
			toast: true,
			position: "top-end",
			showConfirmButton: false,
			timer: 1500,
			timerProgressBar: true,
		});
		Toast.fire({
			icon: "error",
			title: "fondos insuficientes",
		});
	} else if (tengoEnCuenta1 >= monto) {
		const tarifas = {
			ARG: {EUR: 0.0047, USD: 0.00505},
			USD: {EUR: 0.94, ARG: 197.97},
			EUR: {USD: 1.06, ARG: 210.67},
		};

		const tasa = tarifas[deMoneda][aMoneda];
		const resultado = monto * tasa; resultado.toFixed(2);
		meQueda.value = resultadoSinDes;

		let mequedaEnCuenta1 =parseFloat( tengoEnCuenta1 - monto);
		let mequedaEnCuenta2 = tengoEnCuenta2 + resultadoSinDes;

		Swal.fire({
			title: "¿Quieres llevar a cabo una conversión?",
			text: `comvertir ${monto} ${deMoneda} a ${resultadoSinDes} ${aMoneda} 
            le quedara en la cuenta ${deMoneda} ${mequedaEnCuenta1} y en la cuenta ${aMoneda} ${mequedaEnCuenta2} `,
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "comvertir",
		}).then((result) => {
			if (result.isConfirmed) {
				cuentas[deMoneda] = mequedaEnCuenta1;
                console.log(cuentas[deMoneda])
				cuentas[aMoneda] = mequedaEnCuenta2;
			}
		});
	} else {
		meQueda.value = "";
		const Toast = Swal.mixin({
			toast: true,
			position: "top-end",
			showConfirmButton: false,
			timer: 1500,
			timerProgressBar: true,
		});
		Toast.fire({
			icon: "warning",
			title: "infrese un monto",
		});
	}
}

actualizarMontos();

botonComvertir.addEventListener("click", convertir);

monedaQueTengo.addEventListener("change", actualizarMontos);
monedaQueQuiero.addEventListener("change", actualizarMontos);
