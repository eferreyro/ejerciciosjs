//CLASE 26 - FUNCIONES COMO PARAMETROS

//Creo una clase para enviar el prototipo a otra dependencia.
class Persona {
	constructor(nombre, apellido, altura, genero){
		this.nombre = nombre
		this.apellido = apellido
		this.altura = altura
		this.genero = genero
    }
    
    //Creo la funcion saludar
	saludar(fn){
		console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
		if(fn){
			var {nombre, apellido} = this
			fn(nombre, apellido)
		}
    }
    

	esAlto(){
		var esAlto = this.genero == 'masculino' ? 'alto' : 'alta'
		var string = this.altura >= 1.8 ? `Soy ${this.nombre} ${this.apellido} y definitivamente soy ${esAlto}.` 
										: `Soy ${this.nombre} ${this.apellido} y no, no soy ${esAlto}.`
		console.log(string)
	}
}

class Desarrollador extends Persona {
	constructor(nombre, apellido, altura){
		super(nombre, apellido, altura)
	}
	saludar(fn){
		console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador.`)
		if(fn){
			var {nombre, apellido} = this
			fn(nombre, apellido, true)
		}
	}
}

//Creo una funcion Responder Saludo y le paso como parametros el prototipo de persona
function responderSaludo(nombre, apellido, esDev){
	console.log(`Buen día ${nombre} ${apellido}.`)
	if (esDev) { //Pregunto si la persona es desarrollador (booleano = verdadero o falso)
		console.log(`Ah mirá, no sabía que eras dev.`)
	}
}

//Creo los objetos para que sean procesados por las distintas funciones
var Emmanuel = new Desarrollador('Emmanuel', 'Fuentes', 1.76, 'masculino')
var Pepito = new Desarrollador('Pepito', 'Perez', 1.91, 'masculino')
var Isabella = new Persona('Isabella', 'Gonzalez', 1.25, 'femenino')
var Cyn = new Persona('Cynthia', 'Martinez', 1.73, 'femenino')

//LLamo a la funcion saludar para cada objeto
Emmanuel.saludar()
Pepito.saludar(responderSaludo)
Isabella.saludar(responderSaludo)
Cyn.saludar(responderSaludo)
