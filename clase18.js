// CLASE 18 - FILTRAR UN ARRAY

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

const ES_ALTA = persona => persona.altura > 1.8
const ES_BAJA = persona => persona.altura < 1.8

var personasAltas = personas.filter(ES_ALTA)
var personasBajas = personas.filter(ES_BAJA)
//Este otro metodo permite filtrar por medio de una funcion anidada en la variable
//var personasAltas = personas.filter(function(persona){
//return persona.altura > 1.8})
console.table(personasAltas)
console.table(personasBajas)