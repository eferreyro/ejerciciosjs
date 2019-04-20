// Clase 10 - CONDICIONALES.

var persona1 = {
    nombre: 'Emmanuel',
    apellido: ' Ferreyro',
    edad: 35,
    ingeniero: true,
    cocinero: true,
    cantante: false,
    dj: false,
    guitarrista: false,
    vueladrones: false
}

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es:`)
    if (persona.ingeniero){
        console.log('ingeniero')
    }
    if (persona.cocinero){
        console.log('cocinero')
    }
    if (persona.cantante){
        console.log('cantante')
    }
    if (persona.dj){
        console.log('dj')
    }
    if (persona.guitarrista){
        console.log('guitarrista')
    }
    if (persona.vueladrones){
        console.log('vuela drones')
    }
    
}

imprimirProfesiones(persona1)

function imprimirSiesMayordeEdad(persona){
    //Emmanuel es Mayor de Edad
    //Emmanuel es Menor de Edad
}