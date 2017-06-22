import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../providers/user.service';
import { StudyService } from '../../providers/study.service';
import { ScheduleService } from '../../providers/schedule.service';
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
	private studyList:any[] = [];
	private joinList:any[] = [];
	private no_admin:boolean = false;
	private no_join:boolean = false;
	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private userService: UserService,
		private studyService: StudyService,
		private scheduleService: ScheduleService
		) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad UserStdAdminPage');
		this.study_admin_list();
		this.study_join_list();
	}

	study_admin_list(){
		this.studyService.studyAdminList()
		.subscribe(
			data =>{
				if(!data.msg){
					this.studyList = data;
					this.setStudySchedule(this.studyList);
				}else{
					this.studyList = [];
					this.no_admin = true;
				}
			},
			error => console.log(error)
		)
	}
	study_join_list(){
		this.studyService
		.studyJoinList()
		.subscribe(
			data=>{
				if(!data.msg){
					this.joinList = data;
					this.setStudySchedule(this.joinList);
				}else{
					this.joinList = [];
					this.no_join = true;
				}
			}
		)
	}
	setStudySchedule(input){
		input.map(item=>{
			this.scheduleService
			.recentSchedule({study_idx: item.idx})
			.subscribe(
				data=>{
					if(!data.msg){
						item.place_name = data.place_name;
						item.start = data.start;
					}else if(data.msg=="no_res"){
						item.place_name = "다음 모임일정이 없습니다.";
						item.start = "00:00";
					}else{
						console.log(data);
					}
				}
			)
		})
	}

}
