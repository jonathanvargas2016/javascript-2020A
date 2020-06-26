
//deber con el arreglo que tenenmos
//realizar las siguientes operaciones
// por cada vocal dentro de la palabra del estudiante le regalamos 0.1 decimas
// por cada consonante de la palabra del estudiante le vamos a regalar 0.05 decimas
//
// filtrar cuales personas pasaron mayores o iguales a 14

const arreglo = [
    {
        id:1,
        nombre: 'Adrian',
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
        nombre: 'Andrea',
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
        nota: 19
    },
    {
        id:9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id:10,
        nombre: 'Ramiro',
        nota: 12
    }
];


function decimasAdicionales(nombreEstudiante) {
    const arregloLetras = nombreEstudiante.split("")
    let decimas = 0

    for(let letra of arregloLetras){

        if(letra === 'a'||letra ==='e'||letra ==='i'||letra ==='o'||letra ==='u'
            ||letra ==='A'||letra ==='E'||letra ==='I'||letra ==='O'||letra ==='U'){

            decimas = decimas + 0.1
        }else{
            decimas = decimas + 0.05
        }
    }
    return decimas.toFixed(2)

}

const arregloAntiguo = arreglo.filter((valorActual)=>valorActual.nota >=14)
console.log("arreglo ",arregloAntiguo)


const estudiantes = arreglo
    .map((valorActual)=>{

        const decimas = Number(decimasAdicionales(valorActual.nombre))

        const nuevoArreglo = {
            id:valorActual.id,
            nombre:valorActual.nombre,
            nota:valorActual.nota + decimas
        }
        return nuevoArreglo
}).filter((nuevoArreglo)=>nuevoArreglo.nota >= 14)

console.log("estudiantes con notas mayores a 14 :",estudiantes)

