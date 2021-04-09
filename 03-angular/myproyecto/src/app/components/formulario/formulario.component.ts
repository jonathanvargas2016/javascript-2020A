import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Input()
  nombreInput:string

  @Input()
  cedulaInput:string

  @Input()
  estadoCivilInput:string

  @Input()
  correoInput:string

  @Output()
  informacionValidada:EventEmitter<any> = new EventEmitter<any>()


  nombreModelo:string;
  cedulaModelo:string;
  estadoCivilModelo:string
  correoModelo:string

  constructor() { }

  ngOnInit(): void {

    if(this.nombreInput && this.cedulaInput && this.estadoCivilInput && this.correoInput){
      this.nombreModelo = this.nombreInput
      this.cedulaModelo = this.cedulaInput
      this.estadoCivilModelo = this.estadoCivilInput
      this.correoModelo = this.correoInput
    }



  }


  crearUsuario(formularioUsuario){
    console.log(formularioUsuario);

    const cedula = this.cedulaModelo
    const esNumero = !Number.isNaN(Number(cedula))

    if(esNumero){
      console.log('Listo -)');
      this.informacionValidada.emit({
        nombre:this.nombreModelo,
        cedula:this.cedulaModelo,
        estadoCivil:this.estadoCivilModelo,
        correo:this.correoModelo
      })
    }else{
      console.error('No es un Numero')
    }

  }

  ayuda(){
    alert('Ayuda')
  }

}
