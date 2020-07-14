class Persona {
    constructor(nombreParametro, apellidoParametro) {
        this.nombreApellido = '';
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.nombreApellido = this.nombre + '' + this.apellido;
    }
    mostrarNombreApellido() {
        return this.nombreApellido;
    }
}
Persona.nombreReferencial = 'Humano';
//HEREDAR DE CLASE PERSONA
class Usuario extends Persona {
    constructor(nombreParametro, apellidoParametro, cedula, estadoCivil) {
        super(nombreParametro, apellidoParametro);
        this.cedula = cedula;
        this.estadoCivil = estadoCivil;
    }
}
const jona = new Usuario('jona', 'vargas', '1725116139', 'soltero');
console.log(jona.nombre);
console.log(jona.apellido);
console.log(jona.cedula);
console.log(jona.estadoCivil);
