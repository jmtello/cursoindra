import { PROVINCIAS } from './provincias-mock';
import { Provincia } from './provincia';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {


  provincias : Provincia[];
  provinciaSeleccionada: Provincia;

  constructor() { }

  ngOnInit() {
    this.provincias = PROVINCIAS;
  }

  onSelect(provincia: Provincia): void {
    alert('onSelect');
    this.provinciaSeleccionada = provincia;
  }

  avisarProvincia(provincia: Provincia)
  {
    //alert("Provincia=" + provincia.print());
    console.dir(provincia);

    alert("id="+provincia.id+". nombre="+provincia.nombre);
  }

}
