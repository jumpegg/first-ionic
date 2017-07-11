import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FreetalkPage } from './freetalk';

@NgModule({
  declarations: [
    FreetalkPage,
  ],
  imports: [
    IonicPageModule.forChild(FreetalkPage),
  ],
  exports: [
    FreetalkPage
  ]
})
export class FreetalkPageModule {}
