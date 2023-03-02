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

























	
	extracionPesos() {
		do {
			opcion = prompt(
				"Usted " +
					this.nombre +
					" tine en su centa " +
					this.cuentaPesos +
					"$\n Quiere hacer una extracion?\n 1 - si\n 2 - no "
			);

			switch (opcion) {
				case "si":
					if (this.cuentaPesos > 0) {
						let pesos = prompt("Cuántos pesos quiere extraer?:");
						this.cuentaPesos = this.CuentaPesos - pesos;
						alert("Su caunta tiene: " + this.cuentaPesos);
					} else {
						alert("Su Cuenta no tiene fondos");
					}
					break;
				case "no":
					alert("volviendo al inicio...");
					break;
				default:
					alert("opcion incorrecta");
			}
		} while (opcion == "1" || opcion == "2");
	}
	extracionDolares() {
		alert(
			"Usted " +
				this.nombre +
				" tine en su centa " +
				this.cuentaDolares +
				"u$s\n este cajero no permite la extracion de dolares\n puede ir al convertir y convertir dolares en pesos"
		);
	}
	extracionEuros() {
		lert(
			"Usted " +
				this.nombre +
				" tine en su centa " +
				this.cuentaEuros +
				"u$s\n este cajero no permite la extracion de euros\n puede ir al convertir y convertir euros en pesos"
		);
	}
	comversor() {
		do {
			let opcion = prompt("Que desea comvertir?\n 1 - Dolares\n 2 - Euros\n 3 - Inicio");
			switch (opcion) {
				case "1":
					if (this.cuentaDolares > 0) {
						let dolar = parseFloat(
							prompt(
								"Usted tiene " + this.cuentaDolares + "u$s\n cuantos dolares quiere comvertir a pesos"
							)
						);
						if (dolar > this.cuentaDolares) {
							(resultado = dolar * 180), 95;
							this.cuentaPesos = this.cuentaPesos + resultado;
							this.cuentaDolares = this.cuentaDolares - dolar;
							alert(
								"Tiene\n Pesos: " + this.cuentaPesos + "$\n" + "Dolares: " + this.cuentaDolares + "u$s"
							);
						} else {
							alert("Fondos insuficientes");
						}
					} else {
						alert("No tenes Dolares");
					}
					break;
				case "2":
					if (this.cuentaEuros > 0) {
						let euros = parseFloat(
							prompt("Usted tiene " + this.cuentaEuros + "€\n cuantos Euros quiere comvertir a pesos")
						);
						if (euros > this.cuentaEuros) {
							(resultado = euros * 180), 95;
							this.cuentaPesos = this.cuentaPesos + resultado;
							this.cuentaEuros = this.cuentaEuros - euros;
							alert("Tiene\n Pesos: " + this.cuentaPesos + "$\n" + "Euros: " + this.cuentaEuros + "€");
						} else {
							alert("Fondos insuficientes");
						}
					} else {
						alert("No tenes Euros");
					}
					break;
				default:
					alert("opcion incorrecta");
			}
		} while (opcion == 3);
	}
}
