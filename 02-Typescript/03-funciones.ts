
function sumarNumeros(numeroInicial:number,
                      ...numerosASumarse:number[]
):number{

    return numeroInicial
}

function imprimir(mensaje:string):void {
    console.log("hola" + mensaje);
}

const arregloNumeros:number[] = [1,2,3]
const arregloNumerosDos: Array<number> = [1,2,3]
const arregloNumerosTres:(number|string|boolean)[] = [1,"a",true]
const arregloNumerosCuatro: Array<number|string|boolean> = [1,"a",true]
const arregloNumerosOTexto: number[] | string[] = [1,2]

//---> Transpilacion
//tsc nombreArchivo.ts