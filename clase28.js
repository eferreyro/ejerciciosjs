//CLASE 28 - mANEJANDO EL ORDEN ASYNC

const URL_API ='https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const option = {crossDomain:true}
const respuesta = function (persona) {
  console.log(`hola soy ${persona.name}`);
}

function obtenerPersonaje(id,callback){
  const url = `${URL_API}${PEOPLE_URL.replace(':id',id)}`
  $.get(url,option,function (persona) {
    console.log(`hola soy ${persona.name}`)
    if(callback){
       callback()
    }
  })
}



obtenerPersonaje(1, function(){
 obtenerPersonaje(2, function(){
  obtenerPersonaje(3, function(){
    obtenerPersonaje(4)
  })
 })
})
