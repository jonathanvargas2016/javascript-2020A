const fs = require('fs')


function promesaLeerArchivo(path) {

    const promesaLeer = new Promise((resolve, reject) => {

        fs.readFile(path,'utf-8',(error,contenido)=>{
          if(error){
              reject('hubo un error')
          }else{
             resolve(contenido)
          }
        })

    })
    return promesaLeer
}

//promesaLeerArchivo('./06-ejemplo.txt')


function promesaEscribirArchivo(path,contenidoActual,nuevoContenido) {

     const promesaEscribir = new Promise((resolve,reject)=>{
         fs.writeFile(path,contenidoActual + '\n' + nuevoContenido,'utf-8',(error)=>{
             if(error){
                 reject('No se pudo escribir')
             }else{
                resolve()
             }

         })
     })
    return promesaEscribir
}



promesaLeerArchivo('./06-ejemplo.txt')//leer el archivo
    .then((contenidoActual)=>{
        return promesaEscribirArchivo('06-ejemplo.txt',contenidoActual,'Si funciona')
    }
).then(()=>{
    return promesaLeerArchivo('./06-ejemplo.txt')
    }
).then((actualContenido)=>{
    console.log(actualContenido)
    }
).catch((error)=>{
    console.error(error)
    }
)




