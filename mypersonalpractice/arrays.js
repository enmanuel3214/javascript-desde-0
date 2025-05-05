// crear un array

// se puede declarar mediante un let, const o var

//en este caso lo hare con const

const miarray = ["david","pedro","luisa"] //correcto
let array1 =[1,2,3,54,5,6]
let array2 = ["primero","segundo","tercero","cuarto"]
let array3 =[true,false,true,true,true,false]
let array4 = ["luis", "carlos", "alejandro","Pedro"]
let array5 =[1,2,3,4,5,6,7,8,9,10]
let array6 =[]
//Notas mentales
// a pesar de que se puede guardar diferentes tipos de datos en un array lo mas recomendable que los datos almacenados sigan una misma logica al momento de procesarlos o analizarlos

// una propiedad muy importante es la propiedad length que en español se refiere a la longitud. Muchas veces los datos almacenados en un array van a provenir de una base de datos y no se van a presentar como tal en el ejemplo de arriba, necesitamos saber la cantidad de elementos que contiene un array con el cual querramos trabajar

//ejemplo

const segundoarray =["luisa","pedro","carlos","yulisa"] // tenemos a simple vista 4 elementos pero en caso de que no podamos ver la cantidad de elementos a simple vista, usamos la propiedad length


const cantidad_elementos = segundoarray.length;

console.log(cantidad_elementos)//4

// los arrays en javascript no son datos primitivos sino que son objetos y los objetos tienen propiedades y metodos

//ACCEDER A LOS ELEMENTOS DE UN ARRAY   

// para acceder a los elementos de una array tenemos que tener en cuenta que el primer elemento contiene un indice -0 hasta n-1

// EJEMPLO

let estudiantes = ["maria", "jose", "Martin","carlos"]

//maria esta el indice 0, jose es el 1, martin es el 2 y carlos el 3, pero en si el arreglo contiene 4 elementos por eso a la hora de acceder al ultimo arreglo siempre va a hacer n-1
//nombre_de_array[n] nos da un valor del array
let nombre = estudiantes[0];
console.log(nombre)
nombre = estudiantes[1];
console.log(nombre)
nombre = estudiantes[2];
console.log(nombre)
nombre = estudiantes[3];
console.log(nombre)

// si ponemos como indice un numero mayor al limite, nos da como resultado como undefined que es que no hay nada, no hay un valor definido

console.log(estudiantes[4])// undefined

//##AGREGAR ELEMENTOS A UN ARRAY

// Se hace mediante metodos

let array = [] // vacio
console.log(array)
array.push("Pedro","maria","tercer elemento") //descubri que se puede pushear mas de un elemento a la vez

array.push("nuevo elemento 1")
array.push("nuevo elemento 2")
array.push("elemento anadido")
array.push("el metodo push agrega elementos al frente del array")
array.push("me gusta el metodo push")
console.log(array) //imprime el array completo
//El metodo push agrega elementos al final de mi array

//para agregar elementos al principio del array tenemos el metodo unshift()

array.unshift("Este elemento esta posicionado en el indice 0")
array.unshift("elemento 1")
array.unshift("elemento1")
array.unshift("agregando elemento nuevo al principio")
array.unshift("libro1")
array.unshift("uno", 1, true)
array.unshift("palabra nueva")
array.unshift("javascript")
array.unshift("repetir unshift funciona")
array.unshift("ya se usar el metodo push y unshift")

array.unshift("nuevo elemento")
console.log(array)

//## REMOVER O ELIMINAR ELEMENTOS DE UN ARRAY

 //probando con un nuevo array para practicar lo anterior

 let numeros1=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]

 console.log("Eliminando elementos de un array ")

 console.log("array completo: "+ numeros1)

 //existen 2 metodos para eliminar el metodo pop y el metodo shift, bueno lo que hacen es extraer el ultimo y primer elemento con la ventaja de que podemos utilizarlos antes de que sea eliminado por completo como si le hicieramos un ctrl + x a un valor del array

// digamos que quiero eliminar el ultimo elemento despues de usarlo, utilizamos .pop() sin nada adentro porque no hay que indicarle cual valor sino que directamente va a sacar el ultimo valor

// variable de prueba 

let ultimo;

ultimo = numeros1.pop()//19
ultimo = numeros1.pop()//18
ultimo = numeros1.pop()//17
ultimo = numeros1.pop()//16
ultimo = numeros1.pop()//15
ultimo = numeros1.pop()//14
ultimo = numeros1.pop()//13
ultimo = numeros1.pop()//12
ultimo = numeros1.pop()//11
ultimo = numeros1.pop()//10
ultimo = numeros1.pop()//9
ultimo = numeros1.pop()//8
ultimo = numeros1.pop()//7
ultimo = numeros1.pop()//6
ultimo = numeros1.pop()//5
ultimo = numeros1.pop()//4
ultimo = numeros1.pop()//3
ultimo = numeros1.pop()//2
ultimo = numeros1.pop()//1
console.log("array sin el ultimo elemento: "+ numeros1)

console.log("El ultimo elemento era: "+ ultimo)

// ahora con el metodo shift, eliminando el primer valor

let numeros2=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

console.log("Array completo:"+ numeros2)

let primero;
primero = numeros2.shift()
primero = numeros2.shift()
primero = numeros2.shift()
primero = numeros2.shift()
primero = numeros2.shift()
primero = numeros2.shift()
primero = numeros2.shift()
primero = numeros2.shift()
primero = numeros2.shift()
primero = numeros2.shift()
primero = numeros2.shift()
primero = numeros2.shift()
primero = numeros2.shift()
primero = numeros2.shift()
primero = numeros2.shift()
primero = numeros2.shift()
primero = numeros2.shift()
primero = numeros2.shift()
primero = numeros2.shift()
primero = numeros2.shift()
primero = numeros2.shift()
console.log("array sin el primer elemento: "+ numeros2)

console.log("El primer elemento era: "+ primero)

// RECORRER/ITERAR UN ARRAY

const nombres1 = ["David","Juancho","Miguel","Rosa","Rosa linda"]

//bucle for

//for(){} <- bucle for
//dentro del parentesis va una variable declarada en 0 que va a funcionar como contador o iterador, una condicion que mientras se cumpla dicha condicion con respecto a mi contador se estara ejecutando el bucle for y un incremento o decremento variable++ o variable+=1

// quedaria asi: 
 console.log("recorriendo un array:")
for(let i = 0; i< nombres1.length;i++){
    // en este caso i debe ser menor a la cantidad de elementos porque los indices empiezan desde 0 como tal el ultimo indice es la cantidad de elementos menos 1 cuando pase del ultimo indice para porque ya no es menor que la cantidad

    console.log(nombres1[i])
}

for(let i =0;i<nombres1.length;i+=1){
    console.log(nombres1[i])


}
console.log('-----------------------')
nombres1.forEach(element => {
    console.log(element)
});