let n = prompt('Introduce un número');
var i = 1;
var resultado = 0;

if (isNaN(n)== true){
alert('No es un número');
} else{
    while(i<=n){
        
        resultado += i;
        i++;

    }
    document.writeln(`La suma de los números del 1 al ${n} es ${resultado}`);
}