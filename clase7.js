//Clase 7 - DESESTRUCTURACION DE UN OBJETO

//Creo el objeto persona1
var persona1 = {
    nombre: 'Isabella',
    apellido: ' Ferreyro',
    edad: 29
}

function imprimirNombreEnMayusculas(persona){
    //var nombre = persona.nombre
    var { nombre } = persona
    console.log('nombre desestructurado' + nombre.toUpperCase())
}

//reto de nombre y edad
function imprimirNombreYEdad(persona){
    var { nombre, edad } = persona
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`)
}
imprimirNombreEnMayusculas(persona1)
imprimirNombreYEdad(persona1)