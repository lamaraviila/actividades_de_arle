const equipos = [];
const resultados = [];

// Función para ingresar los datos de un partido
function ingresarPartido(numeroFecha) {
    const equipo1 = prompt(`Ingresa el nombre del equipo #1 en la fecha ${numeroFecha}:`);
    const marcador1 = parseInt(prompt(`Ingresa el marcador del equipo #1 en la fecha ${numeroFecha}:`));
    const equipo2 = prompt(`Ingresa el nombre del equipo #2 en la fecha ${numeroFecha}:`);
    const marcador2 = parseInt(prompt(`Ingresa el marcador del equipo #2 en la fecha ${numeroFecha}:`));

    equipos.push(equipo1, equipo2);
    resultados.push([equipo1, marcador1, equipo2, marcador2]);
}

// Función para mostrar el ranking de equipos
function mostrarRanking() {
    const equiposUnicos = Array.from(new Set(equipos));
    const puntosPorEquipo = {};

    equiposUnicos.forEach((equipo) => {
        puntosPorEquipo[equipo] = 0;
    });

    resultados.forEach((resultado) => {
        const equipo1 = resultado[0];
        const marcador1 = resultado[1];
        const equipo2 = resultado[2];
        const marcador2 = resultado[3];

        if (marcador1 > marcador2) {
            puntosPorEquipo[equipo1] += 3; // 3 puntos por victoria
        } else if (marcador1 === marcador2) {
            puntosPorEquipo[equipo1] += 1; // 1 punto por empate
            puntosPorEquipo[equipo2] += 1; // 1 punto por empate
        } else {
            puntosPorEquipo[equipo2] += 3; // 3 puntos por victoria
        }
    });

    // Ordenar equipos por puntos
    const equiposOrdenados = equiposUnicos.sort((equipoA, equipoB) => {
        return puntosPorEquipo[equipoB] - puntosPorEquipo[equipoA];
    });

    // Mostrar ranking
    console.log("Ranking de Equipos:");
    equiposOrdenados.forEach((equipo, index) => {
        console.log(`${index + 1}. ${equipo}: ${puntosPorEquipo[equipo]} puntos`);
    });
}


for (let i = 1; i <= 3; i++) {
    ingresarPartido(i);
}


mostrarRanking();
 