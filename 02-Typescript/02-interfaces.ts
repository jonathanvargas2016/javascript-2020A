//interfaces para definir tipos de datos no van a ocupar memoria
//vs clases ocupan memoria
interface Usuario {
    nombre:string,
    apellido:string,
    edad?:number, //edad opcional
    sueldo?:number, //sueldo opcional
    casado:boolean | 0 | 1,
    estado:'AC' | 'IN' | 'BN',  //DIFERENTES TIPOS DE VALORES
    imprimirUsuario:(mensaje:string)=>string, //funciones en interfaces,
    calcularImpuesto:(impuesto:number)=>number,
    estadoActual:() => 'AP' | 'AF' | 'AT',
}

const jona:Usuario={
    nombre:'jona',
    apellido:'vargas',
    casado:false,
    estado:'AC',
    imprimirUsuario:(mensaje) => {
        return 'el sms es' +  mensaje;
    },
    calcularImpuesto:(impuesto)=>{
        if(this.sueldo){
            return this.sueldo + this.sueldo*impuesto;
        }else{
            return 0;
        }
    },
    estadoActual:()=>{
        if(this.estado === 'AC'){
            return 'AP'
        }if(this.estado === 'IN'){
            return 'AF'
        }else{
            return 'AT'
        }
    }
}

jona.imprimirUsuario('a')

