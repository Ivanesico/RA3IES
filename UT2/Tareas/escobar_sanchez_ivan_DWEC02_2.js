let n1 = prompt("Introduce un numero");
let n2 = prompt("Introduce un numero");
let n3 = prompt("Introduce un numero");

if (n1 < n2 && n1 < n3) {
    document.writeln(n1);
} else if (n2 < n1 && n2 < n3) {
    document.writeln(n2);
} else {
    document.writeln(n3);
}
