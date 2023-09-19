const carros = {
    Chevrolet: {
        Captiva: {
            modelo: "Captiva",
            año: 2023,
            precio: 30000,
            color: "Rojo",
            transmisión: "Automática",
        },
        Traker: {
            modelo: "Traker",
            año: 2023,
            precio: 28000,
            color: "Azul",
            transmisión: "Manual",
        },
    },
    Mazda: {
        Mazda3: {
            modelo: "Mazda3",
            año: 2023,
            precio: 32000,
            color: "Blanco",
            transmisión: "Automática",
        },
        CX5: {
            modelo: "CX5",
            año: 2023,
            precio: 35000,
            color: "Gris",
            transmisión: "Automática",
        },
    },
    Renault: {
        Duster: {
            modelo: "Duster",
            año: 2023,
            precio: 27000,
            color: "Negro",
            transmisión: "Manual",
        },
        Sandero: {
            modelo: "Sandero",
            año: 2023,
            precio: 25000,
            color: "Plata",
            transmisión: "Manual",
        },
    },
};

function mostrarInformacionCarro(marca, referencia) {
    const carro = carros[marca][referencia];
    if (carro) {
        console.log(`Marca del carro seleccionado : ${marca} $${carro.modelo}`);
        console.log(`Modelo del carro seleccionado : ${carro.modelo}`);
        console.log(`Año del carro seleccionado : ${carro.año}`);
        console.log(`Precio del carro seleccionado : $${carro.precio}`);
        console.log(`Color del carro seleccionado : ${carro.color}`);
        console.log(`Transmisión del carro seleccionado : ${carro.transmisión}`);
    } else {
        console.log("Referencia de carro no encontrada.");
    }
}

const marcaCarro = prompt("Ingresa la marca de carro (Chevrolet, Mazda o Renault):");
const referenciaCarro = prompt("Ingresa la referencia de carro:");
const 
mostrarInformacionCarro(marcaCarro, referenciaCarro);