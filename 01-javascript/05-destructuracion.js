//destructuracion. unir diferentes arreglos u objetos en uno solo
//destructuracion ayuda a clonar un arreglo
const adrian = {nombre: "Adrian"
};
const carolina = {
    nombre:'Carolina',
    apellido: "Eguez"
};
const arregloUno = [1, 2, 3, 4, 5];
const arregloDos = [6, 7, 8, 9, 10];

//destructuracion con arreglos
const superArreglo = [
    ...arregloUno,
    ...arregloDos,
]
console.log('superArreglo', superArreglo)



const adrianCarolina={
    ...adrian,
    ...carolina,
}
console.log(adrianCarolina)

//adrianCarolina.nombre = 'Carolina'

console.log('adrianCarolina', adrianCarolina)
console.log('adrian', adrian)

