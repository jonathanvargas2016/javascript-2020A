
class Persona {
    public nombre:string;
    public apellido:string;
    static nombreReferencial: string = 'Humano';
    protected nombreApellido:string = '';

    constructor(nombreParametro:string,apellidoParametro:string) {
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.nombreApellido = this.nombre + '' + this.apellido;
    }

    private mostrarNombreApellido(){
        return this.nombreApellido;
    }


}

//HEREDAR DE CLASE PERSONA

class Usuario extends Persona{

    constructor(nombreParametro:string,
                apellidoParametro:string,
                public cedula:string,
                public estadoCivil:string


    ) {

        super(nombreParametro, apellidoParametro);
    }


}

const  jona = new Usuario(
    'jona',
    'vargas',
    '1725116139',
    'soltero'
)

console.log(jona.nombre)
console.log(jona.apellido)
console.log(jona.cedula)
console.log(jona.estadoCivil)