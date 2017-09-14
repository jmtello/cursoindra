import { User } from './user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'valid-form',
  templateUrl: './valid-form.component.html',
  styleUrls: ['./valid-form.component.css']
})
export class ValidFormComponent implements OnInit {

  user: User;
  message:string;
  constructor() { }

  ngOnInit() { 
    this.user = new User('Perico', 'Palomares');
    this.message = this.user.getFullName();
    //this.user.firstName = 'Perico';
    //this.user.secondName = 'Palomares';
     
  }

}
