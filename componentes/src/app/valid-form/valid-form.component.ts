import { User } from './user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'valid-form',
  templateUrl: './valid-form.component.html',
  styleUrls: ['./valid-form.component.css']
})
export class ValidFormComponent implements OnInit {

  user: User;
  constructor() { }

  ngOnInit() {
  }

}
