import {Component, ElementRef, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TaskService} from "../services/task.service";
import {TaskListComponent} from "../components/task-list/task-list.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {TaskPrintComponent} from "../components/task-print/task-print.component";
import {PrintService} from "../../shared/services/print.service";

@Component({
  selector: 'app-task-pages',
  standalone: true,
  imports: [CommonModule, TaskListComponent, MatProgressSpinnerModule, TaskPrintComponent],
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss'],
})
export class TaskPageComponent {
  private readonly elRef = inject(ElementRef);
  private readonly taskService = inject(TaskService);
  private readonly printService = inject(PrintService);

  tasks$ = this.taskService.fetchTasks();


  startPrint() {
    // this.printService.printPage(this.elRef, ['task-print--buttons']);
    this.printService.printPage(this.elRef);
  }
}
