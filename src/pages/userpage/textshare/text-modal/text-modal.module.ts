import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TextModalPage } from './text-modal';

@NgModule({
  declarations: [
    TextModalPage,
  ],
  imports: [
    IonicPageModule.forChild(TextModalPage),
  ],
  exports: [
    TextModalPage
  ]
})
export class TextModalPageModule {}
