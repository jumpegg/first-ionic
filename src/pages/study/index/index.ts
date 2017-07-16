import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StudyService } from '../../../providers/study.service';
import { NoticeService } from '../../../providers/notice.service';
import { FreetalkService } from '../../../providers/freetalk.service';
import { ScheduleService } from '../../../providers/schedule.service';

import { Schedule } from '../../../vo/schedule';

/**
 * Generated class for the IndexPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

declare var naver : any;

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {

	private title:string;
	private map: any;
	private marker: any;
	private noticeList:any[] = [];
	private freetalkList:any[] = [];
	private schedule:any = new Schedule();
	private pageState:Boolean = false;
	private noticeReady:Boolean = false;
	private freetalkReady:Boolean = false;
	private scheduleReady:Boolean = false;

  constructor(
  	public navCtrl: NavController, 
		public navParams: NavParams,
		public studyService:StudyService,
		public noticeService:NoticeService,
		public freetalkService:FreetalkService,
		public scheduleService:ScheduleService,
		) {
	}

  ionViewDidLoad() {
		this.getSchedule();
		this.getNoticeList();
		this.getFreetalkList();
	}
	
	readyChk(){
		if(this.noticeReady && this.freetalkReady && this.scheduleReady){
			this.pageState = true;
		}
	}
	getNoticeList(){
		this.noticeService
		.forIndex()
		.subscribe(
			data=>{
				if(!data.msg){
					this.noticeList = data;
					this.noticeReady = true;
					this.readyChk();
				}else{
					this.noticeList=[{
						c_date: new Date(),
						id: "작성자",
						title: "등록된 공지사항이 없습니다."
					}];
					this.noticeReady = true;
					this.readyChk();
				}
			}
		)
	}
	getFreetalkList(){
		this.freetalkService
		.forIndex()
		.subscribe(
			data=>{
				if(!data.msg){
					this.freetalkList = data;
					this.freetalkReady = true;
					this.readyChk();
				}else{
					this.freetalkList=[{
						c_date: new Date(),
						id: "작성자",
						title: "등록된 게시글이 없습니다."
					}];
					this.freetalkReady = true;
					this.readyChk();
				}
			}
		)
	}
	getSchedule(){
		this.scheduleService
		.forIndex()
		.subscribe(
			data=>{
				if(!data.msg){
					let obj = this;
					this.schedule = data[0];
					this.map = this.makeMap('map', this.schedule.mapy, this.schedule.mapx, 11);
					this.marker = this.makeMarker(this.schedule.mapy, this.schedule.mapx);
					let infoWindow = this.makeInfoWindow(this.schedule.place_name);
					
					naver.maps.Event.addListener(this.marker, "click", function(e) {
							if (infoWindow.getMap()) {
									infoWindow.close();
							} else {
									infoWindow.open(obj.map, obj.marker);
							}
					});

					infoWindow.open(this.map, this.marker);
					this.scheduleReady = true;
					this.readyChk();
				}else{
					this.schedule.start = "00:00";
					this.schedule.end = "00:00";
					this.schedule.gathering = new Date();
					this.schedule.cost = "등록된 다음 모임이 없습니다.";
					this.schedule.place_name = "다음 모임을 등록해보세요!";
					this.map = new naver.maps.Map('map', {
						zoom: 9
					});
					this.scheduleReady = true;
					this.readyChk();
				}
			}
		)
	}
	makeMap(map, mapy, mapx, zoomLv:number){
		return new naver.maps.Map(map, {
						center: new naver.maps.LatLng(Number(mapy), Number(mapx)),
						zoom: zoomLv
					});
	}
	makeMarker(mapy, mapx){
		return new naver.maps.Marker({
							position: new naver.maps.LatLng(Number(mapy), Number(mapx)),
							map: this.map
					});
	}
	makeInfoWindow(input){
		return new naver.maps.InfoWindow({
						content: `
							<div class="iw_inner">
							<h5>${input}</h5>
							</div>
							`
					});
	}

}
