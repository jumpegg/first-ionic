import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TextsharePage } from './textshare';

@NgModule({
  declarations: [
    TextsharePage,
  ],
  imports: [
    IonicPageModule.forChild(TextsharePage),
  ],
  exports: [
    TextsharePage
  ]
})
export class TextsharePageModule {}
