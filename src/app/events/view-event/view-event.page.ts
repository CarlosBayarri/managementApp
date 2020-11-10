import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Event } from 'src/app/interfaces/event.interface';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.page.html',
  styleUrls: ['./view-event.page.scss'],
})
export class ViewEventPage implements OnInit {

  events$: Observable<Event[]>;

  constructor(private eventService: EventService, private router: Router) { 
    this.events$ = this.eventService.getEvents();
  }

  goToEvent(event) {
    this.eventService.currentEvent = event;
    this.router.navigate(['/edit-event'])
  }
  ngOnInit() {}

}
