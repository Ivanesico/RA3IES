let n = prompt('Introduce un número');

for(i=1; i<=n; i++){
    for(j=1; j<=10;j++){
        if(j==1){
            document.writeln(`<br>Tabla del ${i}: <br>`)
        }
        document.writeln(` ${i}x${j}=${i*j} <br>`);
    }
}