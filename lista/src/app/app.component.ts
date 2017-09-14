import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  elementos:string[]=[];
  elemento:string;
  noHayItems:boolean = true;

  addElemento(elemento:string)
  {
    this.noHayItems = false;
    if(elemento !=null)
    {
      this.elementos.push(elemento);
    }
    
    this.elemento='';

    //alert("elementos=" + this.elementos);
  }

  borrarElemento(elemento:string){
    this.elementos = this.elementos.filter(obj => obj !== elemento);
  }

  
}
