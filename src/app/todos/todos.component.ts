import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  newTodo:string;

  todos = []

  constructor() { }

  ngOnInit() {
  }

  addTodo() {
    this.todos.push({text: this.newTodo});
    this.newTodo = '';
  }

}
