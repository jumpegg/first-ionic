import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ModalController, Platform } from 'ionic-angular';
import { HeightToggle } from '../../../../animation/heightToggle';
import { trigger, state, style, animate, transition } from '@angular/animations';

/**
 * Generated class for the TextModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-text-modal',
  templateUrl: 'text-modal.html',
	animations: [HeightToggle]
})
export class TextModalPage {

	private toggleTest:Boolean = false;

  constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		public viewCtrl: ViewController
		) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TextModalPage');
  }

	dismiss() {
    this.viewCtrl.dismiss();
  }

}
