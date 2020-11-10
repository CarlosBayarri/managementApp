import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Event } from '../interfaces/event.interface';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private events: Observable<Event[]>;
  private eventListRef: AngularFirestoreCollection;
  public currentEvent: Event;
  
  constructor(private af: AngularFirestore, public alertController: AlertController) { 
    this.eventListRef = this.af.collection<Event>('events');
    this.events = this.eventListRef.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          const event: Event = data;
          event.id = id;
          return event;
        });
      })
    );

  }

  async presentAlert(title, description) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Today finish an event',
      subHeader: title,
      message: description,
      buttons: ['OK']
    });

    await alert.present();
  }

  getCurrentEvent() {
    return this.currentEvent;
  }
  getEvents() {
    return this.events;
  }
  addEvent(event: Event) {
    return this.eventListRef.add(event);
  }
  editEvent(event: Event) {
    return this.eventListRef.doc(event.id).update(event);
  }
  removeEvent(event: Event) {
    return this.eventListRef.doc(event.id).delete();
  }
}
