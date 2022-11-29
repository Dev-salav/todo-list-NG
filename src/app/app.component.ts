import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private todoService: TodoService) {}

  todos: Todo[] = [];
  editMode: boolean = false;
  editFormInputData: any;

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodoList().subscribe((response: Todo[]) => {
      this.todos = response;
    });
  }

  getNewTaskData(id: string, description: string) {
    let updatedTodos: Todo = {
      userId: 1,
      id: id,
      title: description,
      completed: false,
    };
    this.todos.unshift(updatedTodos);
  }

  onEdit(todo: Todo) {
    this.editMode = true;
    this.editFormInputData = todo;
  }

  editSelectedTodo(id: any, description: string) {
    const index = this.todos.findIndex(
      (item: any) => item.id.toString() === id
    );
    if (index !== -1) {
      this.todos[index] = {
        userId: 1,
        id: id,
        title: description,
        completed: false,
      };
    }
    this.editMode = false;
  }
}
