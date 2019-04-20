// CLASE 16 - CONDICIONAL MULTRIPLE SWITCH

var signo = prompt('¿Cual es tu signo zodiacal?')

if (signo === null)
    console.log('campo vacio' + ': ' + 'No es un signo zodiacal valido, por favor indique su signo')
else {
    signo = signo.toLowerCase()
    switch (signo) {
        case 'aries':
            console.log('Eres ' + signo + ' tu horóscopo de hoy dice: \n Sería bueno que acepte los consejos que reciba dela gente que lo quiere, evite negarse. Sepa que lo ayudarán a cambiar suformade pensar y actuar.')
            break
        case 'tauro':
            console.log('Eres ' + signo + ' tu horóscopo de hoy dice: \n Durante esta jornada, obtendrá la energía necesaria para poder emprender lo que siempre quiso y no pudo. Vaya detrás del objetivo quemás le interese.')
            break
        case 'geminis':
        case 'géminis':
            console.log('Eres ' + signo + ' tu horóscopo de hoy dice: \n Relájese, ya que será una jornada donde su espontaneidad será bien recibida. No deje pasar el tiempo y exprese sus emociones en el momento oportuno.')
            break
        case 'cancer':
        case 'cáncer':
            console.log('Eres ' + signo + ' tu horóscopo de hoy dice: \nAnímese y comience a interpretar los mensajes de sus propios sueños. Sepa que esto lo ayudará a conocerse mejor y a que sintonice con su inconsciente.')
            break
        case 'leo':
            console.log('Eres ' + signo + ' tu horóscopo de hoy dice: \n Sería bueno que aprenda y cambie la manera enque enfrenta la vida a diario. Comience a disfrutar de lo que tiene y nose haga tanto problema.');
            break
        case 'virgo':
            console.log('Eres ' + signo + ' tu horóscopo de hoy dice: \n Intente conservar una sola dirección y ponga toda su energía en lo que realmente quiere. De esta forma, podrá alcanzar lo que desea con rapidez.');
            break
        case 'libra':
            console.log('Eres ' + signo + ' tu horóscopo de hoy dice: \n Haga lo posible para desprenderse de aquello que le hace mal a su vida. Elija nuevos rumbos y vivirá una etapa de renovación interna muy enriquecedora.');
            break
        case 'escorpion':
        case 'escorpión':
            console.log('Eres ' + signo + ' tu horóscopo de hoy dice: \n Lo más recomendable para esta jornada cuando intente comunicarse con alguien, será que busque un diálogo conciliador sin confrontar a la gente que lo rodea.');
            break
        case 'sagitario':
            console.log('Eres ' + signo + ' tu horóscopo de hoy dice: \n Seguramente en esta jornada se le presentará una situación donde deberá buscar una solución inmediata a ese conflicto. Trate deno involucrarse.');
            break
        case 'capricornio':
            console.log('Eres ' + signo + ' tu horóscopo de hoy dice: \n Comprenda que utilizando pensamientos claros y desapegados, podrán resolver rápidamente todos los problemas cotidianos queestá teniendo hace días.');
            break
        case 'acuario':
            console.log('Eres ' + signo + ' tu horóscopo de hoy dice: \n Cuando deba dar una opiniónde alguna persona, trate de censurar menos y no juzgar a los demás sin conocerlos. Abandone esa posición autoritaria que tiene.');
            break
        case 'piscis':
            console.log('Eres ' + signo + ' tu horóscopo de hoy dice: \n Intente pensar en usted. Destínese tiempo para poder terminar esa carrera que hace tiempo comenzó y por diversas situaciones no puedo finalizar.');
            break
        default:
            console.log(signo + ':' + '\nNo es un signo zodiacal valido')
            break
    }
}