import { Injectable } from '@angular/core';
import {mapTo, Observable, timer} from "rxjs";
import {MockTasksData} from "./mock-tasks.data";
import {Task} from "../types/task.type";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  fetchTasks(): Observable<Task[]> {
    return timer(600).pipe(mapTo(MockTasksData));
  }
}
