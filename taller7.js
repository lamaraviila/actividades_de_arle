function gestionMultas() {
    let tipo = prompt("¿ es devolucion o perdida?");
    let retraso = parseInt(prompt("indica la cantida de dias de retraso:"));
    let revistas = parseInt(prompt("indica la cantidad de revistas prestadas:"));
    let libros = parseInt(prompt("indica la cantidad de libros prestados:"));
    let multaRevistas = revistas * 5000 * retraso;
    let multaLibros = libros * 6000 * retraso;
    let multaPerdida = libros * 10000;

    if (tipo.toLowerCase() === "devolucion") {
        let totalMulta = multaRevistas + multaLibros;
        alert("la multa total de devolucion es de: " + totalMulta + "pesos.");
        
    } else if (tipo.toLowerCase() === "perdida") {
        let totalMulta = multaPerdida;
        alert("la multa total por perdida es de:" + totalMulta + "pesos.");

    } else {
        alert("tipo invalido. intentalo nueva mente."); 
              
    }

}

gestionMultas();