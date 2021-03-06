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

//crear una nueva propiedad dentro del objeto
persona.sueldo; //undefined

persona.sueldo = 1.2;
console.log(persona.sueldo);

console.log(Object.keys(persona))

// "eliminar" cierta llave de objeto
//poniendole undefined

persona.name = undefined;

//eliminar definitivamente llave nombre
delete persona.name;

//CLASE Object -> podenos hacer cosas utiles dentro de los objetos javascript

Object.keys(persona) //obtener las llaver del objeto
console.log('llaves:',Object.keys(persona))
console.log('valores: ',Object.values(persona)) //obtener los valores


//variables por valor;
//--> solo se da en estos casos number, string,boolean, undefined

let edadJona = 23;
let edadSanti = edadJona;

console.log(edadJona)
console.log(edadSanti)

edadJona = edadJona + 1
console.log(edadJona)
console.log(edadSanti)


//variables por referencia !!!!
//solo se da en con objetos, arreglos

let rafael={
    nombre:"Rafel",
}

let lenin = rafael

lenin.nombre = "lenin"

console.log(rafael)
console.log(lenin)

//cuando se igualan objetos javascript se esta referenciando al mismo espacio de memoria.
delete rafael.nombre
console.log(rafael)
console.log(lenin)


let rafael2 = {
    nombre:"Rafael",
}
console.log(rafael2)

let lenin2 = Object.assign({},rafael)//clonar un objeto. le envio una llave vacio

lenin2.nombre = "lenin"

delete rafael2.nombre
console.log(rafael2)
console.log(lenin2)