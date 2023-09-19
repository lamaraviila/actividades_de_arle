let lado1 = prompt("ingresar el primer lado del triangulo:");
let lado2 = prompt("ingrese el segundo lado del triangulo:");
let lado3 = prompt("ingrese el tercer lado:");

if (lado1 === lado2 && lado2 === lado3) {
    alert("el triangulo es equilatero.");
} else {
    alert("el triangulo no es equlatero.");
}