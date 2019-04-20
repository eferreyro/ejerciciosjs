//CLASE 21 - PROTOTIPOS
function Persona (nombre, apellido, altura) {
    this.name = nombre;
    this.lastname = apellido;
    this.height = altura;
  }
  
  //funcion que toma el prototipo de persona y crea un atributo para saludar (una funcion saludar)
  Persona.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.name} ${this.lastname}`)
  }
  
  // Funcion que toma el prototipo de persona y verifica si es alta por medio de una funcion
  Persona.prototype.altura = function () {
    if (this.height > 1.8){
      console.log(`Hola! Soy ${this.name} y soy alto por que mido ${this.height} mts`);
    }
    else {
      console.log(`Hola! soy ${this.name}, No tengo demasiada altura todavia, mido ${this.height} mts`);
    }
  }
  
  //
  var Pepito = new Persona('Pepito', 'Gomez', '1.55');
  Pepito.saludar() 
  var isabella = new Persona('Isabella', 'Gonzalez', '1.25');
  isabella.saludar() + isabella.altura()
  var emma = new Persona('Emma', 'Perez', '1.86');
  emma.altura()