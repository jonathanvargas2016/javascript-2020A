const arreglo = [
    {
        id:1,
        nombre: 'Jonathan',
        nota: 5
    },
    {
        id:2,
        nombre: 'Vicente',
        nota: 8
    },
    {
        id:3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id:4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id:5,
        nombre: 'Fernanda',
        nota: 19
    },
    {
        id:6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id:7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id:8,
        nombre: 'Daniel',
        nota: 19,
    },
    {
        id:9,
        nombre: 'Alisson',
        nota: 14,
    },
    {
        id:10,
        nombre: 'Ramiro',
        nota: 12,
    },
];

console.log('*************************************************')
for(let persona of arreglo){
    console.log("id ",persona.id)
}
console.log('**************************************************')

//operador find()
const respuestaFind = arreglo.find(
    function (valorActual, indiceActual, arregloCompleto) {
        console.log('valor actual',valorActual)
        console.log('indice actual',indiceActual)
        console.log('arreglo completo',arregloCompleto)
        return valorActual.nombre === 'Ramiro'
    }
)

console.log('respuestaFind ',respuestaFind)

//--------------------------------------------------------------------------------------------------
//findIndex()

const respuestaIndex = arreglo.findIndex(
    function (valorActual, indiceActual, arregloCompleto) {
        console.log('valor actual',valorActual)
        console.log('indice actual',indiceActual)
        console.log('arreglo completo',arregloCompleto)
        return valorActual.nombre === 'Ramiro'
    }
)

console.log('respuestaIndex ',respuestaIndex)

//------------------------------------------------
//forEach
const respuestaForEach = arreglo.forEach(
    function (valorActual, indiceActual, arregloCompleto) {
        console.log('valor actual',valorActual)
        console.log('indice actual',indiceActual)
        console.log('arreglo completo',arregloCompleto)
    }
)
console.log("respuestaForEach ",respuestaForEach)


//modificar el arreglo utilizando el operador map -> devolver el nuevo elemento
//map devuelve un nuevo arreglo..

const respuestaMap = arreglo
    .map(
        function (valorActual, indiceActual, arregloCompleto) {
            return valorActual.nota
        }
    )
console.log('respuestaMap ', respuestaMap)


const respuestaMapNuevo = arreglo
    .map(
        /*//funcion anonima -> NO TIENE NOMBRE
        function () {
        }*/

        //funcion flecha
        (valorActual,indiceActual, arregloCompleto)=>{
            const nuevoElemento ={
                id:valorActual.id,
                nombre:valorActual.nombre,
                nota:valorActual.nota + 1,
            }
            return nuevoElemento
        }
    )

console.log('respuestaMap Funcion flecha ', respuestaMapNuevo)
console.log('respuestaMapNuevo ', respuestaMapNuevo)
console.log('arreglo ', arreglo)


//filter
//devolver EXPRESION TRUTY FALSY
const respuestaFilter = arreglo
    .filter(
        (valorActual,indiceSActual,arregloCompleto)=>{
            return valorActual.nota >=14
        }
    )

console.log('respuestaFilter', respuestaFilter)


//deber con el arreglo que tenenmos
//realizar las siguientes operaciones
// por cada vocal dentro de la palabra del estudiante le regalamos 0.1 decimas
// por cada consonante de la palabra del estudiante le vamos a regalar 0.05 decimas
//
// filtrar cuales personas pasaron mayores o iguales a 14