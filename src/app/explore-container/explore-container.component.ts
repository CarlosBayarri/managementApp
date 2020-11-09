import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Task } from '../interfaces/task.interface';
import { TaskService } from '../services/task.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;

  tasks$: Observable<Task[]>;

  constructor(public navCtrl: NavController, private taskService: TaskService) { 
    this.tasks$ = this.taskService.getTasks();
   
  }

  ngOnInit() {}

}
