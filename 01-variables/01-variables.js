//tipado ->es decir saber que tipo de dato es.
//python y javascript es NO TIPADO

//mutables (que pueden cambiar en el tiempo) o inmutables

//declaracion de variables mutables
var numeroUno = 1;
let numeroDos = 2;

numeroUno = 5;
numeroDos = 8;

numeroUno = false;
numeroDos = true;


//INmutables
const configuracionArchivos = "PDF";

//mediante la palabra reservada const no se puede reasignar el valor a la variable

const numero = 1; //number
const texto = "Jona"; //string
const booleano = false; //boolean
const hijos = null; //object
const zapatos = undefined; //undefined
const apellido = 'Vargas';
console.log(typeof numero)
console.log(typeof texto)
console.log(typeof booleano)
console.log(typeof hijos)
console.log(typeof zapatos)
console.log(typeof apellido)

//existen 5 tipos de datos

console.log(Number('asc'))