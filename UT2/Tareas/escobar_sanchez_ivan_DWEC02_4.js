var contador = 0;
var i = 0;
do{
    var n = Number(prompt("Introduce un número"));
    
    if(isNaN(n)== true){
        
        alert("Introduce un numero")
        continue;
    }
    contador += n;
    i++;

} while(contador < 100)

document.writeln(`Acumulado: ${contador}. Números introducidos: ${i}`)