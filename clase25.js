//CLASE 25 - FUNCIONES COMO PARAMETROS

//Imprimiendo algo en la consola
console.log("inicializando archivo");

/* Prototipo Persona 
====================================================*/

//clase prototipal
class Persona {

	/*ATRIBUTOS
	============================*/
		constructor(nom, ape, alt) {
		//para guardarlo en la memoria usamos this

		//this.nombre declara el nombre clave del valor
		this.name = nom;
		//nom es un valor que va en funcion de los parametros del prototipo
		this.apellido = ape;
		
		this.altura = alt;

		this.alta = 1.70;
	     
		//return this; implicitamente es retornado

	}

	/*METODOS
	============================*/

	//acà no hace falta la palabra function
	saludar(responderSaludo) {

		//desestructurando el objeto para sacar los atributos que me interesa
		var {name, apellido} = this;

		// var name = this.name
		// var apellido = this.apellido

		console.log(`${name}: Hola, me llamo ${name} ${apellido}`)

		//si se envio algo como parametro este bloque de codigo sera verdadero y se ejecutara
		if (responderSaludo) {
			responderSaludo(name, apellido, false)
		}

		/*
		Hay valores que siempre se comportan como verdadero, otros como falso

		ejemplo: un array, un objeto, un string con texto
		ejemplo de no: nada, undefined, null, 0
		*/
	}

	esAlto() {
		return this.altura > this.alta;
	}

	esBajo() {
		return !this.esAlto(); 
	}
}


/*Clase Desarrollador
================================================= */

//para heredar diremos que extiende cosas de personas
class Desarrollador extends Persona {


	/*ATRIBUTOS
	============================*/
	constructor( nom, ape, alt ) {


		//antes de usar this debemos llamar al constructor de la clase padre
		super(nom,ape, alt)
		//estos parametros son los mismo de la clase padre

		//super permite llamar a la clase padre
	}

	/*METODOS
	============================*/
	saludar(responderSaludo) {

		//desestructurando el objeto para sacar los atributos que me interesa
		var {name, apellido} = this;

		console.log(`${name}: Hola Mundo, me llamo ${name} ${apellido} y soy dev.`)

	//si se envio algo como parametro este bloque de codigo sera verdadero y se ejecutara
		if (responderSaludo) {
			responderSaludo(name,apellido,true)
		}
	}
	//OUTPUT Ej: Hola Mundo, me llamo Jesùs Fernandez y soy dev.
}

/*Clase Estudiante
================================================= */

class Estudiante extends Persona {

	/*ATRIBUTOS
	============================*/
	constructor( nom,ape,alt ) {

		super( nom,ape,alt )
		//llamando parametros del padre
	}

	/*METODOS
	============================*/
	gritar() { 
		window.alert("MAÑANA TENGO EXAMEN") 
	}

	saludar(responderSaludo) {


		//desestructurando el objeto para sacar los atributos que me interesa
		var {name, apellido} = this;

		console.log(`${name}: Holii, soy ${name} ${apellido} y estudio en el cole jeje`);

		//si se envio algo como parametro este bloque de codigo sera verdadero y se ejecutara
		if (responderSaludo) {
			responderSaludo(name,apellido,false, true)
			//false a esDev, true a esEstudiante
		}
	}

	
}


/*Declaración de objetos
=========================================*/

//Un Array donde coleccionare las personas que cree
var personas = [] 

personas.push(  daniel = new Desarrollador("Emmanuel", "Ferreyro", 1.76) )
personas.push(  mariaV = new Estudiante("Isabella", "Gonzalez", 1.25) )
personas.push(  amanda = new Persona("Cynthia", "Perez", 1.62) )
	

/*Declaración de funciones
=========================================*/

function responderSaludo(nombre,apellido, esDev, esEstudiante) {
	console.log(`Anfitrión: Buen dia ${nombre} ${apellido}`)

	if(esDev) {
		console.log(`Anfitrión: Ah mirá, no sabía que vos eras Dev.`)
	}
	if (esEstudiante) {
		console.log(`Anfitrión: Oye, ¿Y que tal el colegio?`)
		console.log(`${nombre}: Geniaaaaaaal`)
	}
}

/*Ejecución de funciones y métodos
=========================================*/

for(var persona of personas)
{	

	//filtrando, todos menos una persona en concreto
	if (persona !== amanda) {

	//estoy pasando una funcion como parametro
	persona.saludar(responderSaludo);
	//this is like write this three times amanda.saludar();
	
	}
	
}
