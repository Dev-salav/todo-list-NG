import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[app-todo-component]',
  templateUrl: './todo-component.component.html',
  styleUrls: ['./todo-component.component.scss'],
})
export class TodoComponentComponent implements OnInit {
  @Input() id: number = 0;
  @Input() title: string = '';
  @Input() completed: boolean = false;
  @Output() selectedItem = new EventEmitter();
  @Output() changeCompleted = new EventEmitter();
  edit: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onSelectedItem(id: number, title: string, edit: boolean) {
    this.selectedItem.emit({ id: id, title: title, edit: edit });
  }

  onChecked(id: number, completed: boolean) {
    this.changeCompleted.emit({ id: id, completed: completed });
  }
}
