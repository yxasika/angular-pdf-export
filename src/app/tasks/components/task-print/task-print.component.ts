import {Component, EventEmitter, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {PrintDirective} from "../../../shared/services/print.directive";

@Component({
  selector: 'app-task-print',
  standalone: true,
  imports: [CommonModule, MatButtonModule, PrintDirective],
  templateUrl: './task-print.component.html',
  styleUrls: ['./task-print.component.scss'],
})
export class TaskPrintComponent {
  @Output() startPrint: EventEmitter<void> = new EventEmitter<void>();

  onStartPrint() {
    this.startPrint.emit();
  }
}
