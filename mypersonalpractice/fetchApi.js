//fetch

// fetch('https://pokeapi.co/api/v2/pokemon/')
// .then((res)=>{
//     return res.json()
// })
// .then( data => {
//     console.log( data.results)

//     data.results.forEach(element => {
//         console.log(element.name)
//     });
// })
// .catch( error => console.log(error))

//Async / Await

// cuando trabajamos con Async debemos trabajar con una funcion
//  let array = []
// const obtenerPokemones =  async() =>{
//     try {
//       const res=  await fetch('https://pokeapi.co/api/v2/pokemon/')
//       const data = await res.json()
//       console.log(data.results)
//     //   data.results.forEach(element => {
//     //     console.log(element.name)
//     //     array.push(element.name) //una forma de hacer un array pero hay una funcion llamada map la cual crea un nuevo array a partir de un objeto o series de objetos
//     // })

//    // data.results.map (poke => console.log( poke.name))//
//    const nuevoArray = data.results.map(pokemon => poke.name)
//     console.log(nuevoArray);
//     } catch (error) {
//         console.log(error)
//     }

 

// }

// obtenerPokemones()


const fun = async () =>{
 try {
       const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/')
       const data = await respuesta.json()
        // creando un array
        let array = data.results.map(poke=>{
            return poke.name
        })
       console.log(array)
 } catch (error) {
    console.error(error)
 }
}

const segunda = async function() {
    try {
        const getdata = await fetch('https://pokeapi.co/api/v2/pokemon/')
        const data = await getdata.json()
        console.log(data.results)
    } catch (error) {
        console.log(error)
    }
}
segunda()