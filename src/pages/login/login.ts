import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserpagePage } from '../userpage/userpage';
import { User } from '../../vo/user';
import { UserService } from '../../providers/user.service';

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
		public navParams: NavParams,
		private userService: UserService) {
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
			this.userService
			.userLogin(input)
			.subscribe(
				data=>{
					if(!data.msg){
						this.navCtrl.push(UserpagePage);
					}else{
						alert('아이디, 비밀번호를 확인해주세요');
					}
				}
			)
		}
	}

}
