import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css']
})
export class IdeasComponent implements OnInit {

  ideas:string[];
  idea:string;
  constructor() { }

  deleteIdeas(){
    this.ideas = null;
    this.idea = null;
  }

  addIdea(idea:string)
  {

    if(this.ideas)
    {
      this.ideas.push(idea);
    }
    else
    {
      this.ideas = [idea];
    }
    this.idea = null;

  }

  ngOnInit() {
    this.ideas = [];
    //this.ideas = ['idea1', 'idea2', 'otra gran idea'];

  } 
}
