import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Task } from '../interfaces/task.interface';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  private tasks: Observable<Task[]>;
  private taskListRef: AngularFirestoreCollection;
  public currentTask: Task;
  
  constructor(private af: AngularFirestore, public alertController: AlertController) { 
    this.taskListRef = this.af.collection<Task>('tasks');
    this.tasks = this.taskListRef.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          const task: Task = data;
          task.id = id;
          if (task.date_to_end && task.date_to_end === new Date().toISOString().split('T')[0]) {
            // this.presentAlert(task.title, task.description); // Uncomment for production
          }
          return task;
        });
      })
    );

  }

  async presentAlert(title, description) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Today finish a task',
      subHeader: title,
      message: description,
      buttons: ['OK']
    });

    await alert.present();
  }

  getCurrentTask() {
    return this.currentTask;
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
