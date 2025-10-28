let botonDescomprimir = document.getElementById("botonDescomprimir");
let botonComprimir = document.getElementById("botonComprimir");

let textoComprimido = document.getElementById("textoComprimido");
let textoDescomprimido = document.getElementById("textoDescomprimido");

botonComprimir.addEventListener('click', () => {
    let cadenaDescomprimida = textoDescomprimido.value;
    textoComprimido.value = compresion(cadenaDescomprimida);
});

botonDescomprimir.addEventListener('click', () => {
    let cadenaComprimida = textoComprimido.value;
    textoDescomprimido.value = descompresion(cadenaComprimida);
});

function compresion(cadenaDescomprimida) {

    let cont = 1;
    let cadena = "";

    for (let i = 0; i < cadenaDescomprimida.length; i++) {
        if (cadenaDescomprimida.charAt(i) == " ") {
            cadena += "?";
        } else if (cadenaDescomprimida.charAt(i) == cadenaDescomprimida.charAt(i + 1)) {
            cont++;
        } else {
            if (cont == 1) {
                cadena += cadenaDescomprimida.charAt(i);
            } else {
                cadena += cont + cadenaDescomprimida.charAt(i);
                cont = 1;
            }

        }

    }
    
    return cadena;
}


function descompresion(cadenaComprimida) {

    let cadena = "";
    let numero = 0;

    for (let i = 0; i < cadenaComprimida.length; i++) {
        if (cadenaComprimida.charAt(i) == "?") {
            cadena += " ";
        } else if (!isNaN(cadenaComprimida.charAt(i))) {
            numero = parseInt(cadenaComprimida.charAt(i));
            for (let j = 1; j < numero; j++) {
                cadena += cadenaComprimida.charAt(i + 1);
            }
        } else {
            cadena += cadenaComprimida.charAt(i);
        }
    }

    return cadena;
}