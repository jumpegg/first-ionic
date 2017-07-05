import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StudyService } from '../../../providers/study.service';
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
	private studyList:any[] = [];
	private searchText:String = "";
  constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private studyService: StudyService
		) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StdSearchPage');
		this.get_latest_list();
  }
	get_latest_list(){
		this.studyService
		.studyLatest()
		.subscribe(
			data=>{
				this.studyList = data;
			}
		)
	}
	get_study_list(input){
		this.studyService
		.studyTextSearch({search : input})
		.subscribe(
			data=>{
				if(data.msg){
					this.studyList = [];
				}else{
					this.studyList = data;
				}
			}
		)
	}

}
