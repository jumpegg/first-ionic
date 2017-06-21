import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StdSearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-std-search',
  templateUrl: 'std-search.html',
})
export class StdSearchPage {

  constructor(
		public navCtrl: NavController, 
		public navParams: NavParams
		) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StdSearchPage');
  }

}
