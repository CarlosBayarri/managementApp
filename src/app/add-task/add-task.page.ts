import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { Task } from '../interfaces/task.interface';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {

  task: Task = {
    title: null,
    description: null,
    date_to_end: null,
    type: null
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private taskService: TaskService) { }

  addTask(task: Task) {
    console.log('[NEW TASK]', task);
    task.date_to_end = task.date_to_end.split('T')[0];
    task.date_origin = new Date().toISOString().split('T')[0];
    this.taskService.addTask(task).then(res => {
      console.log(res.id);
      this.navCtrl.navigateRoot('/');
    }).catch(err => {
      console.error(err);
    })
  }

  ngOnInit() {
  }
  ionViewDidLoad() {
    console.log('[ADD TASK INIT]');
  }

}
