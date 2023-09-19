for (let i = 1; i <= 10; i++) {
    let asteriscos = "* ".repeat(5); 
    let igual = "=";


    if (i % 2 === 0) {
        asteriscos += " ";
    }


    console.log(asteriscos + igual.repeat(25));
}

console.log("=".repeat(43));
