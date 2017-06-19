import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../providers/user.service';

/**
 * Generated class for the UserStdAdminPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
	selector: 'page-user-std-admin',
	templateUrl: 'user-std-admin.html',
})
export class UserStdAdminPage {

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private userService: UserService
		) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad UserStdAdminPage');
		// this.userService
		// .chkSess()
		// .subscribe(
		// 	data=>{
		// 		console.log(data);
		// 	}
		// )
	}

}
