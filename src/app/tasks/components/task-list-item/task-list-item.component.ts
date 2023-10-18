import {Component, Input} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { Task } from '../../types/task.type';
import {MatCardModule} from "@angular/material/card";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-task-list-item',
  standalone: true,
  imports: [CommonModule, MatCardModule, NgOptimizedImage, MatProgressSpinnerModule],
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.scss'],
})
export class TaskListItemComponent {
  @Input() task!: Task;

  hasLoadedImage = false;

  loaded() {
    this.hasLoadedImage = true;
  }
}
