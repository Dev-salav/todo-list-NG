import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.scss'],
})
export class TableComponentComponent implements OnInit {
  @Input() todos: Todo[] = [];
  @Output() itemToEdit = new EventEmitter();
  constructor() {}

  selectedItem: Object = {};

  ngOnInit(): void {}
  deleteTodo(todo: Todo) {
    this.todos.splice(
      this.todos.findIndex((item: Todo) => item.id === todo.id),
      1
    );
  }

  changeCompletedState(todo: Todo) {
    let index = this.todos.findIndex((item: Todo) => item.id === todo.id);
    if (index !== -1) {
      this.todos[index].completed = !todo.completed;
    }
  }

  editTodo(todo: Todo) {
    this.itemToEdit.emit(todo);
  }
}
