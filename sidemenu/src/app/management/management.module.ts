import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenumanagerPage } from './cantiniere/menumanager/menumanager.page';

// import { ManagementPage } from './management.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: MenumanagerPage
      }
    ])
  ],
  declarations: [
    MenumanagerPage,
  ]
})
export class ManagementPageModule {}
