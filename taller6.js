  console.log()
            

console.log("Bienvenido a la italiana pizza italiana");
console.log("menu de opciones:");
console.log("1. Pizza");
console.log("2. Sandwiches");
console.log("3. Ensaladas")

let opcion = parseInt(prompt("selepcione una opcion (1-3):"));
let cantidad = parseInt(prompt("ingrese la cantidad de opciones:"));
let costo = 0;

if (opcion === 1) {
    costo = cantidad * 7000;
} else if (opcion === 2) {
    costo = cantidad * 7000;
} else if (opcion === 3) {
    costo = cantidad * 15000;
}

let agregarSalsa = prompt("¿desea agregar salsa por $3000? (s/n)").toLowerCase();

if (agregarSalsa === "s") {
    costo += 3000;
     
}
 
console.log("costo total: $" + costo);






     
