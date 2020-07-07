const fs = require('fs');
//
// Hsacer una funcion que me acepte como parametro una variable
// con el patn del archivo y el contenido a agregar al contenido del archivo.
//     la funcion debe tomar estos dos parametos y leer el archivo y añadir el texto al final del archivo

function escribirArchivo(path,contenidoNuevo) {
    fs.readFile(path, 'utf-8',
        (error,contenido)=>{
            if(error){
                console.error('Hubo error',error);
            }else{
                //contenido;
                //console.log(contenido);
                fs.writeFile(path, contenido +"\n"+ contenidoNuevo ,'utf-8',
                    (error)=>{
                        if(error){
                            console.error('Hubo error',error);
                        }else{
                            //  console.log(contenido);
                        }
                    }

                );
                //console.log(contenido);
            }
        }
    );

}
escribirArchivo('./06-ejemplo.txt','JUGO');