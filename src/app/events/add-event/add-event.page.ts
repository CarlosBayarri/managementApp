import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Event } from 'src/app/interfaces/event.interface';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.page.html',
  styleUrls: ['./add-event.page.scss'],
})
export class AddEventPage implements OnInit {

 
  event: Event = {
    title: null,
    description: null,
    date: null,
    type: null
  }

  constructor(public navCtrl: NavController, private eventService: EventService) { }

  addEvent(event: Event) {
    console.log('[NEW EVENT]', event);
    event.date = event.date.split('T')[0];
    this.eventService.addEvent(event).then(res => {
      console.log(res.id);
      this.navCtrl.navigateRoot('/');
    }).catch(err => {
      console.error(err);
    })
  }

  ngOnInit() {
  }

}
