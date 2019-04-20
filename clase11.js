// Clase 11 - FUNCIONES QUE RETORNAN UN VALOR
var juanito = {
    nombre: 'Juan',
    apellido: ' Gomez',
    edad: 14

}
var pepito = {
    nombre: 'Pepe',
    apellido: ' Gomez',
    edad: 19

}
const MAYORIA_DE_EDAD = 18

function esMayorDeEdad(edadpersona){
  return edadpersona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(people) {
  
  if ( esMayorDeEdad(people) ) {
    console.log(`${people.nombre} es mayor de edad, tiene ${people.edad} años`)
  } else {
    console.log(`${people.nombre} es menor de edad, tiene ${people.edad} años`)
  }
}

imprimirSiEsMayorDeEdad(juanito)
imprimirSiEsMayorDeEdad(pepito)