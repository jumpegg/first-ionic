import { Component } from '@angular/core';
import { 
	IonicPage, 
	NavController, 
	NavParams,
	MenuController,
	Nav
 } from 'ionic-angular';

/**
 * Generated class for the UserpagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-userpage',
  templateUrl: 'userpage.html',
})
export class UserpagePage {
	private nav:Nav;

  constructor(
		public navCtrl: NavController,
		public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserpagePage');
  }

	openPage(page) {
    // close the menu when clicking a link from the menu
    // this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

}
