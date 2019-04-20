//CLASE 19 - MAP Y ARRAYS

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

//Creo un array a partir de las variables de arriba
var personas = [
    sacha,
    alan,
    martin,
    dario,
    vicky,
    paula
]
console.table(personas)
//Declaro una funcion a partir de la altura que me traigo como parametro desde el array
const ES_ALTA = ({ altura }) => altura > 1.8

var personasAltas = personas.filter(ES_ALTA)

const pasarAlturaACms = persona => ({
    //personas.altura = personas.altura * 100
       ...persona,
        altura: persona.altura *= 100
    })

var personasCms = personas.map(pasarAlturaACms)

//creo una tabla con el array de 6 personas Altas pasadas a CM
console.table(personasCms)
console.table(personas)
// NOTA! El array personasCms es distinto a personas, ya que el map devuelve un nuevo array