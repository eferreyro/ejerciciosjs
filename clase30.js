//CLASE 30 - PROMESAS
//Las PROMESAS son valores que aun no conocemos. 
//Tienen 3 estados.
//1- PENDING (Cuando creamos una promesa inicia en este estado)
//2- FULFILLED (Cuando se resuelve la promesa)
//3- REJECTER (CUando ocurre un error al traer una promesa.)


const API_URL = 'https://swapi.co/api/' //Me conecto a una API remota
const PEOPLE_URL = 'people/:id' //Accedo a los parametros que trae la API
const opts = { crossDomain: true} // Valido que traiga los datos.

function obtenerPersonaje(id) {//Creo la funcion para obtener personajes en base a promesas
    returnnew Promise((resolve, reject) => {
        consturl = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
            .get(url, opts, function(data){
                resolve(data)
            })
            .fail(() => reject(id))
    })
}

functiononError(id){
    console.log(`ERORRRRRRR!!!!!!!!!!! No se pudo obtener el personaje con id = ${id}.`)
}

obtenerPersonaje(1)
    .then(function(personaje){
        console.log(personaje.name)
    })
    .catch(onError)
