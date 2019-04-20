// Clase 4 - FUNCIONES
var nombre = 'emma', edad=35

function imprimirEdad(n,e){
    if(e <= 1){
    console.log(`${n} tiene ${e} semanas`)
    }
    else{
        console.log(`${n} tiene ${e} años`)
    }
    
}
console.log('imprimiendo variables globales ' +'var nombre = ' + nombre +' | var edad = '+ edad)
imprimirEdad(nombre, edad)
imprimirEdad('Cyn', 34)
imprimirEdad('Isabella', 2)
imprimirEdad('Emmi', 0.4)