import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input()
  articulo:string;

  @Output()
  evento = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {
  }

  borrar(articulo:string){
    //this.evento.emit(this.articulo);
    this.evento.emit(); //no hace falta enviarle el articulo porque se le pasa al apdre el elemento a borrar inline
                        //aunque de esta forma tambien podria valer
  }

}
