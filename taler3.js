let costoCasa = parseFloat(prompt("increse el costo de la casa:"));
let tipoInmueble = parseInt(prompt("Ingrese el tipo de inmueble (1. Usado, 2. Nuevo):"));

let comision = 0;
if (tipoInmueble === 1) {
    comision = costoCasa * 0.1;
} else if (tipoInmueble === 2) {
    comision = costoCasa + 0.12;
}
let valorPropietario = costoCasa - comision;
let valorInMueble = comision;

console.log("valor recivido por el propietario:" + valorPropietario);
console.log("valor recibido por el inmueble:" + valorInmoviliaria);


    