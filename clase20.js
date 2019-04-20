// CLASE 20 - REDUCE ARRAYS

var luis = {
	nombre: "luis",
	edad: 19,
	altura: 1.72,
	libros: 3
}

var jesus = {
	nombre: "jesus",
	edad: 18,
	altura: 1.76,
	libros: 8
}

var teo = {
	nombre: "teo",
	edad: 24,
	altura: 1.68,
	libros: 25
}
//Creo un array a partir de las variables globales anteriores
var personas = [
    luis, 
    jesus, 
    teo
]

//Creo la funcion reducer desestructurando el array de personas y accediendo a libros
const reducer = (acum, {libros}) => acum + libros

// Creo una nueva variable con el total de libros utilizando el metodo reduce
var totalDeLibros = personas.reduce(reducer, 0)

console.log(`En total todos tienen ${totalDeLibros} libros`)




// PRACTICA CON EL CICLO FOR
// var acum = 0;

// for (var i = 0; i < personas.length; i++){
// 	var acum = acum + personas[i].libros
// }