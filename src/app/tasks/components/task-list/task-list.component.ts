import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Task} from "../../types/task.type";
import {TaskListItemComponent} from "../task-list-item/task-list-item.component";

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskListItemComponent],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];
}
