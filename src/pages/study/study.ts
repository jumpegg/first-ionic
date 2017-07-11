import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { 
	IonicPage, 
	NavController, 
	NavParams,
	Platform,
	MenuController,
	Nav
} from 'ionic-angular';
import { AccountPage } from './account/account';
import { DataPage } from './data/data';
import { FlowPage } from './flow/flow';
import { FreetalkPage } from './freetalk/freetalk';
import { MemberPage } from './member/member';
import { NoticePage } from './notice/notice';
import { SchedulePage } from './schedule/schedule';
import { IndexPage } from './index/index'; 

/**
 * Generated class for the StudyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-study',
  templateUrl: 'study.html',
})
export class StudyPage {
	@ViewChild(Nav) nav : Nav;

	rootPage = IndexPage;
	pages: any;
  constructor(
		public navCtrl: NavController, 
		public menu: MenuController,
		public navParams: NavParams,
		public platform: Platform,
		public StatusBar: StatusBar,
		public splashScreen: SplashScreen) {
			this.pages = {
				index : IndexPage,
				freetalk : FreetalkPage,
				notice : NoticePage,
				schedule : SchedulePage,
				account : AccountPage,
				member : MemberPage,
				flow : FlowPage,
				data : DataPage
			}
  }

	initializeApp(){
		this.platform.ready().then(()=>{
			this.StatusBar.styleDefault();
			this.splashScreen.hide();
		});
	}

  ionViewDidLoad() {
		console.log(this.navParams.get('idx'));
		// this.navCtrl.setRoot(StudyPage);
  }

	openPage(input){
		this.menu.close();
		this.nav.push(input);
	}



}
