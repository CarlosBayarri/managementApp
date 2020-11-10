import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from './explore-container.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';

// adding the RouterModule to the Module that contained the component.

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, RouterModule, PipesModule],
  declarations: [ExploreContainerComponent],
  exports: [ExploreContainerComponent]
})
export class ExploreContainerComponentModule {}
