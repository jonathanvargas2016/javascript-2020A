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


//comparaciones
if(apellido.length >1){
    console.log('it is true')
}else{
    console.log('it is false')
}
//cadenas vacias imprime false
if(""){
    console.log('it is true')
}else{
    console.log('it is false')
}
//cadenas de texto imprime true

if("Jona"){
    console.log('it is true')
}else{
    console.log('it is false')
}
//comparaciones con numeros
console.log("\n**************************")
if(-1){
    console.log('it is true')
}else{
    console.log('it is false')
}

if(0){
    console.log('it is true')
}else{
    console.log('it is false')
}

if(1){
    console.log('it is true')
}else{
    console.log('it is false')
}
//el cero es false, los valores positivos y negativos son true

console.log('\n************************************');

if(null){
    console.log('it is true')
}else{
    console.log('it is false')
}


if(undefined){
    console.log('it is true')
}else{
    console.log('it is false')
}

//orden de importancia para declaracion de variables
//es recomendable usar variables inmutables

// 1) const
// 2) let
// 3) x -> var

//objetos javascript conocidos como json


const persona ={name:'Jonathan',
    lastname:'Vargas',
    edad:23,
    direccion:{
        calle_principal:'s33A',
        calle_secundaraia:'Oe14',
        casa:'Oe13-371'
    },
    mascotas:['cafir','tomas','joaquin'],
}

console.log('Nombre: ',persona.name)
console.log('Casa:',persona.direccion)
//los arreglos son tambien object
const ArregloNumeros = [{mascota:'perro',
    edad:'5'},
    {mascota:'gato',
        edad:'2'},
    {mascota:'perico',
        edad:'6'}] //object

console.log(ArregloNumeros[0].mascota)


//push. mandar cambios al servidor
//pull. traer cambios del servidor
//fetch. notificar si hay cambios en el servidor
//merge. agregar los cambios q no hay localmente.


//Acceder a las propiedades del objeto
console.log(persona.mascotas)
persona.name;
persona.lastname;
persona['name'];
//modificar un valor dentro del objeto

persona.name = 'Santiago';
console.log(persona.name)
persona['name']="Jonathan";
console.log(persona)
