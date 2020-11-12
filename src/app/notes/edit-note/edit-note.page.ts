import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Note } from 'src/app/interfaces/note.interface';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.page.html',
  styleUrls: ['./edit-note.page.scss'],
})
export class EditNotePage implements OnInit {

 
  public note: Note;

  constructor(public nacVtrl: NavController, private storageService: StorageService, public menu: MenuController) { }

  saveNote(note) {
    this.storageService.editNote(note).then(res => {
      this.nacVtrl.navigateRoot('tabs');
    })
  }

  removeNote(note: Note) {
    this.storageService.removeNote(note).then(() => {
      console.log('[REMOVED]');
      this.nacVtrl.navigateRoot('tabs');
    })
  }

  ngOnInit() {
    this.note = this.storageService.currentNote;
  }

}
