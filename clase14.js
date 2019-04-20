// CLASE 14 - ESTRUCTURAS REPETITIVAS WHILE

var pepito = {
    nombre: 'Pepe',
    apellido: ' Gonzalez',
    edad: 28,
    peso: 75
}

console.log( `Al inicio del año ${pepito.nombre} pesa ${pepito.peso} kg`)

const INCREMENTO_PESO = 0.2
const DIAS_AÑO = 365
const aumentarPeso = (persona) => persona.peso += INCREMENTO_PESO
const bajarPeso = (persona) => persona.peso -= INCREMENTO_PESO

for(var i = 1; i <= DIAS_AÑO; i++){ //Aplico un ciclo for para incrementar de 1 a 365 días
    var random = Math.random()
    if (random < 0.25){
        //Aumenta de peso
        aumentarPeso (pepito)
    } else if (random < 0.5){
        //Baja de Peso
        bajarPeso(pepito)
    }
}
console.log(`Al finalizar el año ${pepito.nombre} pesa ${pepito.peso.toFixed(2)}kg`)