const costoServicio = 500;
const monedasPermitidas = [500, 1000];
const billetesPermitidos = [2000, 5000];

function calcularDevolucion(pagoUsuario) {
    const devolucion = pagoUsuario - costoServicio;
    return devolucion;
}

function procesarPago(pagoUsuario) {
    if (monedasPermitidas.includes(pagoUsuario)) {
        const devolucion = calcularDevolucion(pagoUsuario);
        if (devolucion < 0) {
            console.log("Falta dinero. Por favor, inserta más monedas.");
        } else if (devolucion === 0) {
            console.log("Pago exitoso. ¡Gracias por usar nuestros servicios!");
        } else {
            console.log(`Pago exitoso. Tu devolución es de ${devolucion} pesos.`);
        }
    } else if (billetesPermitidos.includes(pagoUsuario)) {
        console.log("Aceptamos solo monedas como forma de pago. Por favor, usa monedas.");
    } else {
        console.log("Forma de pago no válida. Ingresa monedas de 500 o 1000.");
    }
}

const pagoUsuario = 1000; 
procesarPago(pagoUsuario);

console.log("¡Vuelve pronto!");
