//importamos la libreria fs

//codigo sincrono va linea por linea

//codigo asincrono
const fs = require('fs')

console.log('Primero') //sincrono

fs.readFile(//Asincrona -> tiene que el filesystem responder decir que el archivo existe o no y de ahi ejecutar el resto de codigo
    './06-ejemplo.txt',
    'utf-8',
    (error,contenido)=>{ //callback (funcion que se ejecuta dentro de las funciones asincronicas y devuelve la respuesta)
                            // -> si ya respondio, se sigue con el codigo
        console.log('Segundo')

        if(error){
            console.error('hubo error',error)
        }else{
            console.log(contenido)
        }
    }
)
const suma = 5 + 5 //sincrono
console.log('suma', suma) // sincrono
console.log('Final') //sincrono
