import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StdListPage } from './std-list';

@NgModule({
  declarations: [
    StdListPage,
  ],
  imports: [
    IonicPageModule.forChild(StdListPage),
  ],
  exports: [
    StdListPage
  ]
})
export class StdListPageModule {}
