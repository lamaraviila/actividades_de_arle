function imprimirTablaDeMultiplicar(numero) {
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}

const numeroTabla = 5; 
imprimirTablaDeMultiplicar(numeroTabla);
