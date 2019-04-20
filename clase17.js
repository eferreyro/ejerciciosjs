//CLASE 17 - ARRAYS
var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

var personas = [
    sacha,
    alan,
    martin,
    dario,
    vicky,
    paula
]

//recorremos un array con un ciclo for
for (var i=0; i < personas.length; i++){
    var persona = personas [i]
    console.log(`${persona.nombre} mide ${persona.altura} metros`)
}

personas.forEach(persona => {
    console.log(`desde un foreach ${persona.nombre} mide ${persona.altura} mts`)
});

personas[0] 	// == sacha {}
personas[1] 	// == alan {} 
// El 0 y el 1 representan respectivamente el subíndice del elemento que se va a mostrar, el orden en que están cargados en el array.

personas[0].nombre 	// Mostrará el valor del nombre del objeto 'sacha'
personas[3].altura 		// Mostrará el valor de la propiedad 'altura' del objeto 'dario'