//https://www.npmjs.com/package/inquirer
const inquirer = require('inquirer')
const fs = require('fs');
const path = './restaurante.txt'
const pathComida = './comida.txt'


function  Restaurante(){
    const datosRestaurante = {
        nombre:"",
        direccion:"",
        telefono:"",
        capacidad:0,
        abiertoFinesDeSemana:false
    }
    return datosRestaurante
}

function RestauranteYComida(){
    const restauranteYComida = {
        restaurante:Restaurante(),
        comida:[],
    }
    return restauranteYComida
}


function promesaLeerArchivo(path) {

    const leerArchivo = new Promise((resolve,reject)=>{
        fs.readFile(path,'utf-8',(error,contenido)=>{
            if(error){
                reject('no se pudo leer el archivo')
            }else{
                resolve(contenido)
            }
        })
    })
    return leerArchivo
}
function promesaEscribirArchivo(path,contenidoActual,contenidoNuevo) {

    const escribirArchivo = new Promise((resolve,reject)=>{
        fs.writeFile(path,contenidoActual + ',\n' + contenidoNuevo, (error)=>{
            if(error){
                reject('error =(')
            }else{
                resolve()
            }
        })
    })
    return escribirArchivo
}

async function escribirEnArchivo(path, contenidoNuevo) {
    try {
        const contenidoArchivoActual = await promesaLeerArchivo(path)
        await promesaEscribirArchivo(path,contenidoArchivoActual,contenidoNuevo)
    }catch (error){
        console.error(error)
    }
}

function promesaModificarArchivo(path,contenidoNuevo) {

    const modificarArchivo = new Promise((resolve,reject)=>{
        fs.writeFile(path,contenidoNuevo, (error)=>{
            if(error){
                reject('error =(')
            }else{
                resolve()
            }
        })
    })
    return modificarArchivo
}

async function modificarEnArchivo(path, contenidoNuevo) {
    try {
        await promesaLeerArchivo(path)
        await promesaEscribirArchivo(path,contenidoNuevo)
    }catch (error){
        console.error(error)
    }
}


async function leerArchivo(path) {
    let listaRestaurantes = [];
    const contenidoArchivoActual =  await promesaLeerArchivo(path)
    listaRestaurantes = (JSON.parse('[' + contenidoArchivoActual + ']'))
    return listaRestaurantes;

}

async function registrarRestaurante() {

    try{
        const respuesta= await inquirer.prompt([{
            type:'input',
            name:'nombre',
            message:'Ingrese el nombre del Restaurante',
            default:'Politecnico'
        },{
            type:'input',
            name:'direccion',
            message:'Ingrese la direccion del Restaurante',
            default:'Av'
        },{
            type:'input',
            name:'telefono',
            message:'Ingrese el telefono del Restaurante',
            default:'4516625'
        },{
            type:'input',
            name:'capacidad',
            message:'Ingrese la capacidad maxima',
            default:100
        },{
            type: "list",
            name: "abierto",
            message: 'Esta abierto Fines de Semana:',
            choices: ['Si', 'No'],
        }])

        const restaurante = Restaurante()
        restaurante.nombre = respuesta.nombre
        restaurante.direccion = respuesta.direccion
        restaurante.telefono = respuesta.telefono
        restaurante.capacidad = respuesta.capacidad

        if(respuesta.abierto === 'Si'){
            restaurante.abiertoFinesDeSemana = true
        }else{
            restaurante.abiertoFinesDeSemana = false
        }
        console.log('Restaurante Registrado ->', restaurante)
        escribirEnArchivo(path,JSON.stringify(restaurante));



    }catch (error) {
        console.error(error)
    }

}
//registrarRestaurante()
//RestauranteYComida()
//registrarComidas()


async function registrarComidas() {

    try{
        let restauranteYComida = RestauranteYComida()
        let nombreRestaurante = []
        let listaRestaurantes = await leerArchivo(path)

        listaRestaurantes.forEach((valorActual)=>{
            nombreRestaurante.push(valorActual.nombre)
        })

        const respNombreRestau = await inquirer.prompt([{
            type: "list",
            name: "nombre",
            message: 'Seleccione el Restaurante:',
            choices: nombreRestaurante,
        }])

        const objetoRestaurante = listaRestaurantes.find((valorActual)=>{
            return valorActual.nombre === respNombreRestau.nombre
        })

        restauranteYComida.restaurante = objetoRestaurante

        bandera  = true
        while(bandera){

            const respuestaComida = await inquirer.prompt([{
                type:"input",
                name:"nombre",
                message: "Ingrese el nombre del plato",
                default:"Fritada"
            },{
                type:"input",
                name:"descripcion",
                message: "Ingrese la descripcion del plato",
                default:"carne de cerdo con papas y ensalad"
            },{
                type:"list",
                name:"tipo",
                message: "Seleccione el tipo de plato",
                choices:['Normal','Ejecutivo']
            },{
                type:"input",
                name:"precio",
                message: "Ingrese el precio del plato",
                default:2.50
            },{
                type:"list",
                name:"postre",
                message: "Incluye postre?",
                choices: ['Si', 'No'],

            },{
                type:"list",
                name:"opcion",
                message: "Quiere seguir ingresando mas comidas",
                choices: ['Si', 'No'],
            }
            ])


            if(respuestaComida.opcion === 'Si'){
                bandera = true
            }else{
                bandera = false
            }

            if(respuestaComida.postre === 'Si'){
                respuestaComida.postre = true
            }else{
                respuestaComida.postre = false
            }

            restauranteYComida.comida.push(respuestaComida)
        }
        console.log("Comida Registrada ->",restauranteYComida)
        escribirEnArchivo(pathComida,JSON.stringify(restauranteYComida));

    }catch (error) {
        console.error(error)
    }

}




async function mostrarRestaurantesOComidas(path) {

    let listaRestaurantesYComidas = await leerArchivo(path)

    if(listaRestaurantesYComidas.length === 0 ){
        console.log('ARCHIVO VACIO')
    }else {
        if(path === './comida.txt'){

            listaRestaurantesYComidas.forEach(
                function (valorActual,index) {

                    console.log((index+1),'Restaurante:',valorActual.restaurante)
                    console.log('Comidas',valorActual.comida)
                }
            )
        }else{
            listaRestaurantesYComidas.forEach(
                function (valorActual,index) {
                    console.log((index+1),'Restaurante:',valorActual)
                }
            )
        }
        return listaRestaurantesYComidas
    }

}



async function eliminarRestauranteYcomida(){
    console.log('falta')
}



async function eliminarRestaurante(path){

    const nombreRestautantes = [];
    const listaRestaurantes = await leerArchivo(path)

    if(listaRestaurantes.length === 0){

        console.log('ARCHIVO VACIO')

    }else{
        listaRestaurantes.forEach((valorActual)=>{
            nombreRestautantes.push(valorActual.nombre)
        })

        const listaNombres = await inquirer.prompt([{
            type:'list',
            name:'opcion',
            message:'Seleccione el restaurante a eliminar?',
            choices:nombreRestautantes
        }])

        let indexObjeto = 0;
        listaRestaurantes.findIndex((valorActual, index)=>{
            if(valorActual.nombre === listaNombres.opcion){
                indexObjeto = index
            }
        })
        listaRestaurantes.splice(indexObjeto,1)
        await promesaModificarArchivo(path,JSON.stringify(listaRestaurantes).replace('[','').replace(']',''))
    }

}

async function eliminarRestauranteYComida(){
    const nombreRestaurantes = [];
    const listaComidas = [];
    const listaRestaurantesYComida = await leerArchivo(pathComida)

    if(listaRestaurantesYComida.length === 0){

        console.log('ARCHIVO VACIO')

    }else{
        listaRestaurantesYComida.forEach((valorActual)=>{
             nombreRestaurantes.push(valorActual.restaurante.nombre)

        })

        const listaNombres = await inquirer.prompt([{
            type:'list',
            name:'opcion',
            message:'Seleccione el restaurante',
            choices:nombreRestaurantes,
        }])


       listaRestaurantesYComida.forEach((valorActual)=>{
           console.log(valorActual.comida.nombre)
            if(valorActual.restaurante.nombre === listaNombres.opcion){
                //listaComidas.push(valorActual.comida.nombre)

            }
        })

        //console.log(listaComidas)

        // const respListasComidas = await inquirer.prompt([{
        //     type:'list',
        //     name:'opcion',
        //     message:'Seleccione la comida a eliminar',
        //     choices:listaComidas,
        // }])



    }
}
eliminarRestauranteYComida()



async function opciones() {

    try{
        const respuesta = await inquirer.prompt([{
            type:'list',
            name:'opcion',
            message:'Seleccione una opcion',
            choices:[
                'Agregar Restaurante',
                'Agregar Platos',
                'Mostrar Restaurantes',
                'Mostrar Platos',
                'Eliminar Restaurante',
                'Eliminar Platos',
                'Salir'
            ],
        }])

        if(respuesta.opcion === 'Agregar Restaurante'){

            await registrarRestaurante();
            opciones()

        }
        else if(respuesta.opcion === 'Agregar Comidas'){
            await registrarComidas();
            opciones()

        }
        else if(respuesta.opcion === 'Mostrar Restaurantes'){
            await mostrarRestaurantesOComidas(path);
            opciones()

        }
        else if(respuesta.opcion === 'Mostrar Comidas'){
            await mostrarRestaurantesOComidas(pathComida);
            opciones()
        }
        else if(respuesta.opcion === 'Eliminar Restaurante'){
            await eliminarRestaurante(path)
           opciones()

        }
        else if(respuesta.opcion === 'Eliminar Platos'){
            await eliminarRestauranteYcomida()
            opciones()

        }
        else {
            return console.log('BYE =)')
        }

    }catch (error) {
        console.error(error)
    }

}
//opciones()