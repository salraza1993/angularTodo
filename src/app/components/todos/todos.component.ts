import { Component, OnInit } from '@angular/core';
import * as uuid from 'uuid';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  title: String = 'Page Title'
  inputTodo: String = ''
  alertMessage: String = 'Please enter your todo title.'
  emptyError: Boolean = false;
  todoEditItem: String = ''
  
  todos: any = [
    {
      id: uuid.v4(),
      content: 'I have to buy a sport shoe',
      status: 'in-progress',
      editMode: false,
      completed: false,
    },
    {
      id: uuid.v4(),
      content: 'I have to learn more abouy AngularJs',
      status: 'Completed',
      editMode: false,
      completed: false,
    },
    {
      id: uuid.v4(),
      content: 'Once, I will finish my dinner, I will get back to learn more about AngularJs',
      status: 'in-progress',
      editMode: false,
      completed: true,
    },
  ];

  constructor() { }

  ngOnInit(): void {
    console.log(this.todos);
  }
  addNewToDo() {
    if (this.inputTodo == '') {
      this.emptyError = true
    } else {
      this.todos.unshift({
        id: uuid.v4(),
        content: this.inputTodo,
        status: 'in-progress',
        editMode: false,
        completed: false,
      });
      this.inputTodo = ''
      this.emptyError = false
    }
  }
  taskCompleted(itemId: String) {
    console.log(itemId);
    this.todos.map((item:any) => {
      if (item.id === itemId) {
        item.completed = !item.completed;
        item.status = item.status !== 'completed' ? 'completed' : 'in-progress';
      };
      return item;
    })
  }
  deleteTask(itemId: String) {
    this.todos = this.todos.filter((item: any) => item.id !== itemId);
  }
  editTask(itemId:string) {
    this.todos.map((item: any) => { 
      if (item.id === itemId) { 
        item.editMode = !item.editMode;
        this.todoEditItem = item.content;
      }
      return item;
    })
  }
  updateItem(itemId: String) {
    console.log(itemId);
    this.todos.map((item: any) => { 
      if (item.id === itemId) { 
        item.editMode = !item.editMode;
        item.content = this.todoEditItem;
      }
      return item;
    })
  }

}
