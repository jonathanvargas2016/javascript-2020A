const fs = require('fs');
//let numeroPar=0;
function promesaPar(numero) {
    const miPrimerPromesa=new Promise((resolve,reject)=>{
            // SOLO CUANDO NO VA A FALLAR SE USA RESOVE
            //  resolve(numero);//contenido
            if(numero %2 ==0){
                const numeroPar=numero;
                resolve(numeroPar);
                //resolve('Es par');
            }
            else{
                reject('No es par =(');//catch
            }

        });
    return miPrimerPromesa;
}


function promesaElevarCuadrado(numero) {
    const miPrimerPromesa=new Promise(
        (resolve,reject)=>{
            const numeroElevadoCuadrado=Math.pow(numero,2);
            resolve(numeroElevadoCuadrado);

        });
    return miPrimerPromesa;

}

promesaPar(8)
    .then(
        (numeroPar)=>{
            console.log('Contenido then', numeroPar);
            //NO PONER ADENTRO
            return promesaElevarCuadrado(numeroPar);// SOLO SE PUEDE USAR PROMESA
        }
    )
    .then((numeroParCuadrado)=>{
        console.log('Numero par al cuadrado:,', numeroParCuadrado)

    })
    .catch(
        (error)=>{

            console.error('Contenido catch', error)
        }
    );