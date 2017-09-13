import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  public autor: string
  public year: string

  constructor() { }

  // Las variables siempre se inicializan en este constructor, el otro es para 
  //inyeccion de dependencias
  ngOnInit() {
    this.autor = 'Pako Okap';
    this.year = '2099';
  }

}
