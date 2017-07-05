import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserStdAdminPage } from './user-std-admin';

@NgModule({
  declarations: [
    UserStdAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(UserStdAdminPage),
  ],
  exports: [
    UserStdAdminPage
  ]
})
export class UserStdAdminPageModule {}
