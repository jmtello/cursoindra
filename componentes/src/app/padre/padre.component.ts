import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  mostrar:boolean;
  appTitle:string;

  hiddenTitle(mostrar:boolean){
    this.mostrar = mostrar;
  }

  constructor() { }

  ngOnInit() {
    this.mostrar = true;
    this.appTitle = "Titulo padre";
  }

}
