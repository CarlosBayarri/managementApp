import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../interfaces/task.interface';
import { TaskService } from '../services/task.service';
import { Router } from '@angular/router';
import { Event } from '../interfaces/event.interface';
import { EventService } from '../services/event.service';
import { Note } from '../interfaces/note.interface';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;

  tasks$: Observable<Task[]>;
  events$: Observable<Event[]>;
  notes$: Observable<Note[]>;
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1.25,
    speed: 400,
    pagination: false,
    scrollbar: false
  };

  constructor(private taskService: TaskService, private eventService: EventService, private router: Router, private storageService: StorageService) { 

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
  goToEvent(event) {
    this.eventService.currentEvent = event;
    this.router.navigate(['/edit-event'])
  }
  goToNote(note) {
    this.storageService.currentNote = note;
    this.router.navigate(['/edit-note'])
  }
  ngOnInit() {
    console.log('[INIT EXPLORE]');
    this.tasks$ = this.taskService.getTasks();
    this.events$ = this.eventService.getEvents();
    this.notes$ = this.storageService.getNotes();
  }

}
