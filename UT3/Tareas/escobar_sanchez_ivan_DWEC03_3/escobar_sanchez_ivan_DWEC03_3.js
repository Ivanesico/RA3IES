let boton = document.getElementById("boton");
let texto = document.getElementById("contador");
let contador = localStorage.getItem('contador');

if (contador) {
    contador = parseInt(contador)
} else {
    contador = 0;
}
texto.value = contador;

boton.addEventListener('click', () => {

    if (contador >= Number.MAX_VALUE) {
        alert("Ya no se pueden realizar más clicks");
    } else {
        contador++;
        texto.value = contador;
    }
    localStorage.setItem('contador', contador);
});

