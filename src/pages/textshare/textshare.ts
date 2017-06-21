import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TextsharePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-textshare',
  templateUrl: 'textshare.html',
})
export class TextsharePage {

  constructor(
		public navCtrl: NavController, 
		public navParams: NavParams
		) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TextsharePage');
  }

}
