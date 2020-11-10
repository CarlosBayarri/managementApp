import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public actionSheetController: ActionSheetController, private router: Router) {}

  async openOptions2Add() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Features',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Event',
        icon: 'calendar',
        handler: () => {
          this.router.navigate(['/add-event'])
        }
      }, {
        text: 'Task',
        icon: 'create',
        handler: () => {
          this.router.navigate(['/add-task'])
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}
