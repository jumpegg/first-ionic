import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StdSearchPage } from './std-search';

@NgModule({
  declarations: [
    StdSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(StdSearchPage),
  ],
  exports: [
    StdSearchPage
  ]
})
export class StdSearchPageModule {}
