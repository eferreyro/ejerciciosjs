// Clase 6 - OBJETOS
// como no podemos pisar una variable y no podemos crear dos variables con el mismo nombre,
//la mejor opcion es crear un objeto. basicamente es una variable que contiene muchas opciones.

var persona1 = {
    nombre: 'Isabella',
    apellido:  'Ferreyro',
    edad: 2
}

// La manra convencional de escribir una funcion es esta
function imprimirNombreEnMayusculas(person){
    var nombre = persona1.nombre.toUpperCase()
    console.log(nombre)
}

// una manera mas corta de escribir el mismo codigo
function imprimirNombreMayus(person){
    console.log('funcion corta ' + persona1.nombre.toUpperCase())
}

//manera mejorada y clara de programacion la funcion.

function imprimeNombreEnMayuscula({ nombre }){//Desglozamos el objeto persona1, obteniendo el atributo nombre
    console.log('manera mejorada de escribir el nombre de ' + nombre.toUpperCase())
}
imprimirNombreEnMayusculas(persona1)
imprimirNombreMayus(persona1)
imprimeNombreEnMayuscula(persona1)