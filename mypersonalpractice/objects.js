//para crear un objeto vamos a declarar una variable

const persona = {
    nombre: "david",
    edad: 24,
    comidaFav:"hamburguesas"
};

//como acceder a una propiedad de mi objeto o diccionario nombre de objeto.propiedad

console.log(persona.nombre)
console.log(persona.edad)
console.log(persona.comidaFav)
let nombre = persona.nombre
let edad = persona.edad
let comida = persona.comidaFav

console.log(nombre, edad, comida)

const nuevoObjeto = {
    nombre: "alice",
    city: "Santiago",
    id: 124563,
    ocupacion: "pediatra"
}

console.log(nuevoObjeto.nombre, nuevoObjeto.city, nuevoObjeto.id)
//destructuring objects
// podemos extraer las propiedades de un objeto de la siguiente forma:

 let {city} = nuevoObjeto
console.log(city);
delete nuevoObjeto.id // asi se elimina una propiedad de un objeto con la palabra reservada delete

//como agregar propiedades a un objeto

nuevoObjeto.nuevapropiedad = true
nuevoObjeto.estado= false

console.log(nuevoObjeto)


//como recorrer un objeto

for (const key in persona) {
   console.log(persona[key])
}

const web = {
    nombre: "Bluuweb",
    links: {
        enlace: 'www.bluuweb.cl'
    },
    redesSociales:{
        youtube:{
            enlace: 'youtube.com/bluuweb',
            nombres: 'bluuweb yt'
        }
    }
}

console.log(web.redesSociales.youtube.enlace)

const {enlace, nombres} = web.redesSociales.youtube

 console.log(enlace, nombres);