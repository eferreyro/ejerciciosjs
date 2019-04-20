// CLASE 15 - CICLO DO-WHILE
var contador = 0
const llueve = () => Math.random() < 0.25

do {
    contador++
} while (!llueve())
console.log(`fui a ver si llovia ${contador} veces`)

var frecuencia = contador===1 ? "vez":"veces"; //operador ternario para saber si es 1 es vez. si es mayor es veces
console.log(`Fui a ver si llovía ${contador} ${frecuencia}`);


