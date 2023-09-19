const candidatos = {
    "Ana Maria Suares": 0,
    "Diego Acero": 0
    
};

function registrarVoto(votante, candidato) {
    if (votos.hasOwnProperty(candidato)) {
        votos[candidato]++;
        console.log(votante + " ha votado por " + candidato);

    } else {
        console.log("opcion de voto invalida");

    }
}

registrarVoto("Votante 1", "maria beltran");
registrarVoto("Votante 2", "alejo canderon");
registrarVoto("Votante 3", "Amaria beltran");
registrarVoto("Votante 4", "alejo calderon");
registrarVoto("Votante 5", "maria beltran");
registrarVoto("Votante 6", "alejo calderon");
registrarVoto("Votante 7", "maria beltran");
registrarVoto("Votante 8", "alejo calderon");
registrarVoto("Votante 9"," maria beltranz");
registrarVoto("Votante 10", "Diego Acero");


    var ganador = "";
    var perdedor = "";
    var maxVotos = -1;
    var totalVotos =
        object.values(votos).reduce((a, b) => a + b, 0);

    for (var candidato in candidatos ){
        if (votos[candidato] > maxVotos) {
            maxVotos = votos[candidato];
                ganador = candidato;
                
        } else if (votos[candidato] === maxVotos) {
            perdedor = candidato;

           }
            
            
        }      
    
console. log("El gandor de la votacion es: " + ganador);
console.log("El perdedor de la votacion es: " + perdedor);
