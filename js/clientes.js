class Persona {
	nombre;
	dni;
	clave;
	direcion;
	cuentaPesos;
	cuentaDolares;
	cuentaEuros;
	constructor(nombre, dni, clave, cuentaPesos, cuentaDolares, cuentaEuros) {
		this.nombre = nombre;
		this.dni = parseFloat(dni);
		this.clave = parseFloat(clave);
		this.cuentaPesos = parseFloat(cuentaPesos);
		this.cuentaDolares = parseFloat(cuentaDolares);
		this.cuentaEuros = parseFloat(cuentaEuros);
	}
}