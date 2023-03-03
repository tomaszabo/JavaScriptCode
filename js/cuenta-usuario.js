const usuarioIng = document.getElementById("nombre-usuario-ing");
const dniIng = document.getElementById("dni-usuario-ing");
const extraccionCuentas = document.getElementById("extraccion");
const depositoCuentas = document.getElementById("deposito");
const combercionDivisa = document.getElementById("combercion");
const tranferenciaCuenta = document.getElementById("tranferencia");
const salirCuenta = document.getElementById("salir");

const usuarioIngresoStora = localStorage.getItem("usuario");
const usuarioCuenta = JSON.parse(usuarioIngresoStora);

usuarioIng.textContent = usuarioCuenta.nombre;
dniIng.textContent = usuarioCuenta.dni;

clickBoton(extraccionCuentas, "/pag/extracion.html");
clickBoton(depositoCuentas,"/pag/deposito.html")
clickBoton(combercionDivisa,"/pag/combersor.html")
clickBoton(tranferenciaCuenta,"/pag/")
