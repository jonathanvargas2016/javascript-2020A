
const  arreglo = [1,2,3,4,5,6,7,8,9]

//no se puede modificar un arreglo cuando es definido con const

let cualquierCosa = 1
cualquierCosa = true
cualquierCosa = "hola"
cualquierCosa = undefined
cualquierCosa = null
cualquierCosa = {}

let arregloTodo = [1,2,3,"hola",true, undefined,{},[1,2,true]]

//for of
for(let numero of arreglo){
    console.log("numero: ", numero);
}
//for in

for(let indice in arreglo){
    console.log(arreglo[indice])
}


//aniador elementos al final
arreglo.push(11);

//eliminar del final
arreglo.pop()

//añadir al principio del arreglo
arreglo.unshift(5)
arreglo.unshift(4,77,9)
console.log(arreglo)

//eliminar desde cierta posicion
arreglo.splice(0,1)
console.log(arreglo)

//aniadir elementos desde cieta posicion
arreglo.splice(0,0,3,4,0)
console.log(arreglo)


//buscar un elemento por el index. Si el indice es -1 indica que no encontro el elemento dentro del arreglo
const indece = arreglo.indexOf(120)
console.log("indice",indece);
arreglo.splice(indece,1);
console.log(arreglo)

delete arreglo[0]
console.log(arreglo)

















