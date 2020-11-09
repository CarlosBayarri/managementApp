import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewTaskPage } from './view-task.page';

const routes: Routes = [
  {
    path: '',
    component: ViewTaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewTaskPageRoutingModule {}
