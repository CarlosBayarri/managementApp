import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { Task } from '../interfaces/task.interface';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.page.html',
  styleUrls: ['./edit-task.page.scss'],
})
export class EditTaskPage implements OnInit {

  public task: Task;

  constructor(public nacVtrl: NavController, public navParams: NavParams, private taskService: TaskService) { }

  saveTask(task) {
    this.taskService.editTask(task).then(res => {
      this.nacVtrl.navigateRoot('Home');
    })
  }

  removeTask(task: Task) {
    this.taskService.removeTask(task).then(() => {
      console.log('[REMOVED]');
      this.nacVtrl.navigateRoot('Home');
    })
  }

  ngOnInit() {
  }
  ionViewDidLoad() {
    this.task = this.navParams.get('task');
  }

}
