
let preguntas = [
    {
        pregunta: "¿en que año fue fundada la ciudad buenos aires?",
        respuesta: "1536",
    },
    {
        pregunta: "¿cual es la capital de italia?",
        respuesta: "Roma",
    },
    {
        pregunta: "¿quien escribio la novela 'Cien años de soledad'?",
        respuesta: "Grabiel Garcia Marques",
    },
    {
        pregunta: "¿de que pais es el origuen el tango?",
        respuesta: "Arguentina",


    },
    {
        pregunta: "¿cual es el rio mas largo del mundo?",
        respuesta: "Amazonas",

    },
];  
let puntaje = 0;
for (let i = 0; i < preguntas.length; i++){
    let respuestasUsuario =
        prompt(preguntas[i].pregunta);
    
    if (respuestasUsuario.toLowerCase() === preguntas[i].respuesta.toLowerCase()) {
        puntaje += 10;
        alert("¡correcto! sumaste 10 puntos.");
    } else {
        alert("incorrecto la respuesta era: " + preguntas[i].respuesta);
    }
}

alert("tu puntaje final es: " + puntaje);
