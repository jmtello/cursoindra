import { Component, OnInit } from '@angular/core';

const txtMostrar:string = 'Mostrar Texto';
const txtOcultar:string = 'Ocultar Texto';

@Component({
  selector: 'mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {
  mostrar: boolean;
  textoBoton:String;
  
  constructor() { }

  ngOnInit() {
    this.mostrar = false;
    this.textoBoton = txtMostrar;
  }

  mostrarOcultar(){
      this.mostrar = !this.mostrar;

      this.textoBoton = this.mostrar ? txtOcultar : txtMostrar;

  }

}
