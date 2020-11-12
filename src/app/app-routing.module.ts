import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'add-task',
    loadChildren: () => import('./add-task/add-task.module').then( m => m.AddTaskPageModule)
  },
  {
    path: 'edit-task',
    loadChildren: () => import('./edit-task/edit-task.module').then( m => m.EditTaskPageModule)
  },
  {
    path: 'view-task',
    loadChildren: () => import('./view-task/view-task.module').then( m => m.ViewTaskPageModule)
  },
  {
    path: 'add-event',
    loadChildren: () => import('./events/add-event/add-event.module').then( m => m.AddEventPageModule)
  },
  {
    path: 'edit-event',
    loadChildren: () => import('./events/edit-event/edit-event.module').then( m => m.EditEventPageModule)
  },
  {
    path: 'view-event',
    loadChildren: () => import('./events/view-event/view-event.module').then( m => m.ViewEventPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'add-note',
    loadChildren: () => import('./notes/add-note/add-note.module').then( m => m.AddNotePageModule)
  },
  {
    path: 'edit-note',
    loadChildren: () => import('./notes/edit-note/edit-note.module').then( m => m.EditNotePageModule)
  },
  {
    path: 'view-note',
    loadChildren: () => import('./notes/view-note/view-note.module').then( m => m.ViewNotePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
