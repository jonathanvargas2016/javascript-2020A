//04-funciones.js

function soloNumeros(a,b,c) {
    return a - b + c
}

soloNumeros('v',true,[1,2,3])

//javascrip es un lenguaje no tipado y no ayuda a verificar fallas
//en javascrip permite escribir tonteras pero igual funciona, si se compila no da errores

//funcionaes nombradas

function funcionNombrada(){}
funcionNombrada()

const funcionNombradaDos = function () {}
var funcionNombradaTres = function () {}
let funcionNombradaCuatro = function () {}

funcionNombradaDos()
funcionNombradaTres()
funcionNombradaCuatro()

//FUNCIONES DE FLECHA
const funcionNombradaCinco = ()=>{}
const funcionNombradaSeis = (x)=>{return x}
const funcionNombradaSiete = (x)=>x+1 //fat arrow functions
//una sola linea
//omito return
//omito llaves

const funcionNombradaOcho = x => x //tengo un solo parametro
//omito los parentesis

const funcionNombradaNueve = (x,y,z)=> x + y+ z

function sumarNumeros(numeroInicial,
                      //parametros infinitos
                      ...otrosNumeros /*con los ... se convierte en un arreglo*/) {
    return numeroInicial + otrosNumeros.reduce((acumulado, valorActual)=>{
        return acumulado + valorActual
    },0)
}

sumarNumeros(1,2,3,4,5,6,7,8,9,10)


const arreglo = [1,2,3,4,5,6,7]

const total = arreglo.forEach(
    (valorActual)=>{return valorActual}
)
console.log(total)


//deber 2 -> mandar