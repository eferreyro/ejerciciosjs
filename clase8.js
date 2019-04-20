//Clase 8 - PARAMETROS COMO REFERENCIA O COMO VALOR

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

//accedo a la edad del objeto persona y le agrego 1
function cumpleaños(persona){
    return{
        //desglosamos al objeto con el ...
        ...persona,
        //Accedo a la edad y le agregamos 1 creando un nuevo objeto
        edad: persona.edad+1

    }
}
