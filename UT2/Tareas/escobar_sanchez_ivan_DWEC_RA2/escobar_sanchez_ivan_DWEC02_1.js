let nombre = prompt("Introduce tu nombre");
let edad = prompt("Introduce tu edad");

if (edad >= 18) {
    document.writeln(`Hola ${nombre}, tienes ${edad} años, eres mayor de edad`);
} else if (edad < 0) {
    alert(" Edad inválida");
} else {
    document.writeln(`Hola ${nombre}, tienes ${edad} años, eres menor de edad`);
}
