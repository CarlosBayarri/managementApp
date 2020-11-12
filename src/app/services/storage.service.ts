import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { Note } from '../interfaces/note.interface';
import { from } from 'rxjs';
import { map, scan, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public notes: Observable<Note[]>;
  public currentNote: Note;

  constructor(public storage: Storage) { 
    this.reloadNotes();
  }

  // NOTES
  reloadNotes() {
    const observable = from(this.getObject('notes'));
    console.log('reloaded');
    this.notes = null;
    this.notes = observable.pipe(
      map(actions => {
        // this.setObject('notes', []); // To delete all
        console.log('Notes: ', actions);
        return actions.map(a => {
          return a;
        });
      })
    );
  }
  getNotes() {
    return this.notes;
  }
  addNote(note: Note) {
    return new Promise((resolve, reject) => {

      this.notes.subscribe(data => {
        data.push(note);
        this.setObject('notes', data).then(res => {
          console.log('Added', data);
          this.reloadNotes();
          resolve(true);
        });
      });

    })
  }
  editNote(note: Note) {
    return new Promise((resolve, reject) => {
      this.notes.subscribe(data => {
        data.map(res=> {
          if (res.id === note.id) {
            res.title = note.title;
            res.description = note.description;
            this.setObject('notes', data).then(res => {
              this.reloadNotes();
              resolve(true);
            });
          }
        })
      })
    });
  }

  removeNote(note: Note) {
    return new Promise((resolve, reject) => {
      this.notes.subscribe(data => {
        var index = data.findIndex((elt) => elt.id === note.id);
        data.splice(index, 1);
        this.setObject('notes', data).then(res => {
          this.reloadNotes();
          resolve(true);
        });
      })
    });
  }
  // NOTES

  // set a key/value
  async set(key: string, value: any): Promise<any> {
    try {
      const result = await this.storage.set(key, value);
      console.log('set string in storage: ' + result);
      return true;
    } catch (reason) {
      console.log(reason);
    return false;
  }
  }
  // to get a key/value pair
  async get(key: string): Promise<any> {
    try {
      const result = await this.storage.get(key);
      console.log('storageGET: ' + key + ': ' + result);
      if (result != null) {
        return result;
      }
      return null;
    } catch (reason) {
      console.log(reason);
      return null;
    }
  }
  // set a key/value object
  async setObject(key: string, object: Object) {
    console.log('setter');
    return this.storage.set(key, JSON.stringify(object));
  }
  // get a key/value object
  async getObject(key: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await this.storage.get(key);
        if (result != null) {
          resolve(JSON.parse(result));
        } else {
          resolve(null);
        }
      } catch (reason) {
        console.log(reason);
        resolve(null);
      }
    });
  }
  // remove a single key value:
  remove(key: string) {
    return this.storage.remove(key);
  }
  //  delete all data from your application:
  clear() {
    this.storage.clear();
  }

}
