import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from '../interfaces/task.interface';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  private tasks: Observable<Task[]>;
  private taskListRef: AngularFirestoreCollection;

  constructor(private af: AngularFirestore) { 
    this.taskListRef = this.af.collection<Task>('tasks');
    this.tasks = this.taskListRef.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          const task: Task = data;
          task.id = id;
          return task;
        });
      })
    );
  }

  getTasks() {
    return this.tasks;
  }
  addTask(task: Task) {
    return this.taskListRef.add(task);
  }
  editTask(task: Task) {
    return this.taskListRef.doc(task.id).update(task);
  }
  removeTask(task: Task) {
    return this.taskListRef.doc(task.id).delete();
  }
}
