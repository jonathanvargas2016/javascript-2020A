const fs = require('fs');
const path = './06-ejemplo.txt'

function promesaLeerArchivo(path) {

    const leerArchivo = new Promise((resolve,reject)=>{
        fs.readFile(path,'utf-8',(error,contenido)=>{
            if(error){
                reject('hubo un problema')
            }else{
                resolve(contenido)
            }
        })
    })
    return leerArchivo
}

function promesaEscribirArchivo(path,contenidoActual,contenidoNuevo) {

    console.log(contenidoActual)
    const escribirArchivo = new Promise((resolve,reject)=>{
        fs.writeFile(path,contenidoActual + '\n' + contenidoNuevo, (error)=>{
            if(error){
                reject('error =(')
            }else{
                resolve()
            }
        })
    })
    return escribirArchivo
}



//ASYNC AWAIT -> SOLO DENTRO DE UNA FUNCION
async function ejercicio(path, contenidoNuevo) {

    //asyn siempre con try and catch
    try {
        const contenidoArchivoActual = await promesaLeerArchivo(path)
        await promesaEscribirArchivo(path,contenidoArchivoActual,contenidoNuevo)
        const actualContenido = await  promesaLeerArchivo(path)
        console.log(actualContenido)
    }catch (error){
        console.error(error)
    }
    console.log('6')
    console.log('7')
}
const respuestaEjercicio = ejercicio('./06-ejempo.txt','playboy')
console.log('respuestaEjercicio', respuestaEjercicio)

const f = async () =>{
    //contenido
}