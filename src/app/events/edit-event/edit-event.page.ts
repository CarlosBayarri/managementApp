import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Event } from 'src/app/interfaces/event.interface';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.page.html',
  styleUrls: ['./edit-event.page.scss'],
})
export class EditEventPage implements OnInit {

 
  public event: Event;

  constructor(public nacVtrl: NavController, private eventService: EventService, public menu: MenuController) { }

  saveEvent(event) {
    this.eventService.editEvent(event).then(res => {
      this.nacVtrl.navigateRoot('tabs');
    })
  }

  removeEvent(event: Event) {
    this.eventService.removeEvent(event).then(() => {
      console.log('[REMOVED]');
      this.nacVtrl.navigateRoot('tabs');
    })
  }

  ngOnInit() {
    this.event = this.eventService.getCurrentEvent();
  }

}
