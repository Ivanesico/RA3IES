let boton = document.getElementById('boton');
let fecha = new Date();
let finAnyo = new Date(fecha.getFullYear(), 11, 31);
let difDias = finAnyo.getTime() - fecha.getTime();
difDias = Math.ceil(difDias / (24 * 60 * 60 * 1000));

boton.addEventListener('click', () => {
    nuevaVentana = window.open("", "", "height=600,width=400");
    nuevaVentana.document.write(`Hoy es día: ${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()} y faltan ${difDias} días para fin de año`);

})