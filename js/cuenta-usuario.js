const extraccionCuentas = document.getElementById("extraccion");
const depositoCuentas = document.getElementById("deposito");
const comvercionDivisa = document.getElementById("comvercion");
const tranferenciaCuenta = document.getElementById("tranferencia");
const salirCuenta = document.getElementById("salir");

const usuarioCuenta = usuarioIngresado();

infoUsuario(usuarioIng, dniIng, usuarioCuenta);

clickBotonRedirecion(extraccionCuentas, "/pag/extracion.html");
clickBotonRedirecion(depositoCuentas, "/pag/deposito.html");
clickBotonRedirecion(comvercionDivisa, "/pag/comversor.html");
clickBotonRedirecion(tranferenciaCuenta, "/pag/#");
salirDeCuenta(salirCuenta, "/index.html");
