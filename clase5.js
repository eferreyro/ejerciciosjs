// Alcance de las funciones

var nombre = 'Emmanuel' //variable de alcance global

function imprimirNombreEnMayusculas (nombre){//alñcance de la funcion "scope"
    nombre = nombre.toUpperCase()
    console.log(nombre)
}//sin del scope

imprimirNombreEnMayusculas(nombre)

function imprimirNombreEnMinusculas(n) {
    n = n.toLowerCase()
    console.log(n)
}

imprimirNombreEnMinusculas(nombre)//el alcance de Nombre pasa por la funcion