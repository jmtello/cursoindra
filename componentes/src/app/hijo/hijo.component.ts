import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input()
  titulo:string;


 @Output()
 evento = new EventEmitter<boolean>();

  visible:boolean = true;
  constructor() { }


  ngOnInit() {
  }


  mostrarOcultar(){
    this.visible = !this.visible;
    this.evento.emit(this.visible);
  }

}
