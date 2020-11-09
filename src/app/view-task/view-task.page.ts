import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Task } from '../interfaces/task.interface';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.page.html',
  styleUrls: ['./view-task.page.scss'],
})
export class ViewTaskPage implements OnInit {

  tasks$: Observable<Task[]>;

  constructor(private taskService: TaskService, private router: Router) { 
    this.tasks$ = this.taskService.getTasks();
  }

  calculateDateToEnd(task) {
    const date_1 = new Date(task.date_origin);
    const date_2 = new Date(task.date_to_end);
    const date_now = new Date();

    var Difference_In_Time = date_2.getTime() - date_1.getTime(); 
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
    const days_to_end_from_origin = +Difference_In_Days.toFixed(0);

    var Difference_In_Time_1 = date_2.getTime() - date_now.getTime(); 
    var Difference_In_Days_1 = Difference_In_Time_1 / (1000 * 3600 * 24); 

    let days_to_end_from_now = +Difference_In_Days_1.toFixed(0);
    if (days_to_end_from_now <= 0) days_to_end_from_now = 0;

    let percentage_to_end_from_now = (100 - (days_to_end_from_now*100/days_to_end_from_origin)) / 100;
    if (percentage_to_end_from_now < 0) percentage_to_end_from_now = 100;

    const result_now_to_end = percentage_to_end_from_now;
    return result_now_to_end;
  }

  goToTask(task) {
    this.taskService.currentTask = task;
    this.router.navigate(['/edit-task'])
  }
  ngOnInit() {}

}
