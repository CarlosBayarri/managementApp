import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Note } from 'src/app/interfaces/note.interface';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.page.html',
  styleUrls: ['./add-note.page.scss'],
})
export class AddNotePage implements OnInit {


  note: Note = {
    title: null,
    description: null
  }

  constructor(public navCtrl: NavController, private storageService: StorageService) { }

  createID() {
    return Math.random().toString(36).substr(2, 9);
  };

  addNote(note: Note) {
    note.id = this.createID();
    console.log('[NEW NOTE]', note);
    this.storageService.addNote(note).then(res => {
      this.navCtrl.navigateRoot('/tabs');
    });
    //this.storageService.notes.push(note);
    /*this.storageService.setObject('notes', this.storageService.notes).then(res => {
      this.navCtrl.navigateRoot('/');
    }).catch(err => {
      console.error(err);
    })*/
  }


  ngOnInit() {
  }

}
