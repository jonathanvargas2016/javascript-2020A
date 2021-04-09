import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-carta-pelicula',
  templateUrl: './carta-pelicula.component.html',
  styleUrls: ['./carta-pelicula.component.css']
})
export class CartaPeliculaComponent implements OnInit, OnDestroy {


  @Input() urlImagen:string
  @Input() descripcion:string
  @Input() boton:string
  textEjemplo="Adrian"
  linkEjemplo = "https://lh3.googleusercontent.com/eVlrYaNBlecATUc6DxJcJ4Ie3oIH4E9hYQdd2mFa2IHvQF-hWnbDi4afUw-PJwoCPsEqhgaMU8i9CgsbQesQlyeGxdB44PWJ9r7ycfIC2dLmwnPwoOmYtn1jFVWLeuEQMw1nmp3o=w2400"
  linkTextoEjemplo = "https://www.google.com"

  @Output()
  eventoDioClicEnBoton:EventEmitter<boolean> = new EventEmitter<boolean>()

  @Output()
  eventoDioClicEnImagen:EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor() {
    console.log('constructor');
    //no utilizar configuraciones dentro del constructor

  }

  ngOnInit(): void {
    console.log('Init');
    //logica inicial del componente, si se quiere extraer datos cuando la pag se carga
  }

  ngOnDestroy(): void {
    console.log('destroy');
    //dessuscribirnos de todas las suscripciones
  }

  ejemploFuncion(){
    alert('Hola Raza!!')
  }

  eventoOnBlur(){
    console.log('Blur');

  }

  ejecutarEventoDioClic(){
    this.eventoDioClicEnBoton.emit(true)
  }

  ejecutarEventoDioClicImagen(){
    this.eventoDioClicEnImagen.emit(true)
  }

}
