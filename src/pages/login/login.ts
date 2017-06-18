import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserpagePage } from '../userpage/userpage';
import { User } from '../../vo/user';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	private user:User = new User();

  constructor(
		public navCtrl: NavController, 
		public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

	login(input){
		if(!input.id){
			alert("아이디를 입력하세요");
		}else if(!input.password){
			alert("비밀번호를 입력하세요");
		}else if(input.id.trim().length == 0){
			alert("아이디를 입력하세요");
		}else if(input.password.trim().length == 0){
			alert("비밀번호를 입력하세요");
		}else{
			this.navCtrl.push(UserpagePage);
		}
	}

}
