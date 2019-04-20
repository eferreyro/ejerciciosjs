// CLASE 9 - COMPÁRACIONES
//Creamos una variable X con un valor numerico y una variable Y con un STRING
var x = 4, y = '4'

//comparamos una variable con ==

console.log(x == y) // devuelve TRUE ya que son iguales
console.log(x === y) //devuelve FALSE ya que el triple igual calcula el valor y el tipo

var persona = {
    nombre: 'Emmanuel'
}
var persona2 = {
    nombre: 'Emmanuel'
}
// en el ejemplo de arriba las dos variables son objetos iguales pero ocupan un espacio en memoria diferente
// lo mismo pasa si acceso al valor persona dentro de persona3 creando un nuevo objeto

persona3 = {
    ...persona // accedo a la variable persona creando un nuevo objeto
}


var sacha = {
    nombre: 'Sacha'
}
var otro = {
    nombre: 'Sacha'
}
var otroMas = {
    ...sacha
}

sacha == otro		
// false

sacha === otro 	
// false

sacha == otroMas	
// false

sacha === otroMas	
// false

var otroMasTodavia = sacha

sacha == otroMasTodavia	
// True

sacha === otroMasTodavia	
// True