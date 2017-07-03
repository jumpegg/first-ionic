import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../providers/user.service';
declare var $ : any;
declare var Materialize: any;
/**
 * Generated class for the MypagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-mypage',
  templateUrl: 'mypage.html',
})
export class MypagePage {
	private userInfo:any = {};
  constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private userService: UserService
		) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MypagePage');
		this.userService
		.userInfo()
		.subscribe(data=>{
			if(!data.msg){
				this.userInfo = data;
			}else{
				console.log(data.msg);
			}
		})
  }

}
