import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StudyService } from '../../../providers/study.service';
import { PlaceService } from '../../../providers/place.service';
import { ScheduleService } from '../../../providers/schedule.service';
import { HeightToggle } from '../../../animation/toggle.animation';

import { Schedule } from '../../../vo/schedule';
import { Place } from '../../../vo/place';

declare var naver : any;

/**
 * Generated class for the SchedulePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schedule',
	templateUrl: 'schedule.html',
	animations: [ HeightToggle ]
})
export class SchedulePage {
	private title: string;
	private map: any;
	private marker: any;
	private tableState:string = 'close';
	private schList:Schedule[] = [];
	private lastSch:Schedule = new Schedule();
	private lastPlc:Place = new Place();
	private tempSch:any;
	private continue:boolean;
	private pageState:Boolean = false;

  constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		public studyService:StudyService,
		public placeService:PlaceService,
		public scheduleService:ScheduleService,
		) {
  }

  ionViewDidLoad() {
		this.tempSch = {
			gathering : new Date(),
			place_name : '다음 모임을 등록해보세요.',
			start : '00:00',
			end : '00:00',
			cost: 0
		}
		this.scheduleService.list()
		.map(
			data=>{
				this.continue = true;
				if(data.msg == 'no_res'){
					this.schList = [];
					this.lastSch = this.tempSch;
					this.continue = false;
					this.mapDefault();
				}else{
					this.schList = data;
					if(new Date(data[0].gathering) < new Date()){
						this.lastSch = this.tempSch;
						this.mapDefault();
						this.continue = false;
					}else{
						this.lastSch = data[0];
					}
				}
				return this.continue;
			}
		).subscribe(
			(data) => {
				if(data){
					this.placeService
						.getStudyPlace(this.lastSch.place_idx)
						.subscribe((data)=>{
							this.lastPlc = data;
							let obj = this;
							this.map = this.makeMap('map', this.lastPlc.mapy, this.lastPlc.mapx, 11);
							this.marker = this.makeMarker(this.lastPlc.mapy, this.lastPlc.mapx);
							let infoWindow = this.makeInfoWindow(this.lastPlc.name);

							naver.maps.Event.addListener(this.marker, "click", function(e) {
									if (infoWindow.getMap()) {
											infoWindow.close();
									} else {
											infoWindow.open(obj.map, obj.marker);
									}
							});

							infoWindow.open(this.map, this.marker);
							this.pageState = true;
					})
				}else{
					this.lastPlc.name = '다음 모임을 등록해보세요.';
					this.pageState = true;
				}
			}
		);
		console.log('ionViewDidLoad SchedulePage');
		
	}
	setSchedule(input){
		this.scheduleService.getOne(input)
		.flatMap(
			data=>{
				this.lastSch = data;
				return this.placeService.getStudyPlace(this.lastSch.place_idx)
			}
		).subscribe(
			data=>{
				this.lastPlc = data;
				let obj = this;
				this.map = this.makeMap('map', this.lastPlc.mapy, this.lastPlc.mapx, 11);
				this.marker = this.makeMarker(this.lastPlc.mapy, this.lastPlc.mapx);
				let infoWindow = this.makeInfoWindow(this.lastPlc.name);

				naver.maps.Event.addListener(this.marker, "click", function(e) {
						if (infoWindow.getMap()) {
								infoWindow.close();
						} else {
								infoWindow.open(obj.map, obj.marker);
						}
				});

				infoWindow.open(this.map, this.marker);
			}
		)
	}
	
	tableOpener(){
		this.tableState = (this.tableState == 'close') ? 'open' : 'close';
	}
	mapDefault(){
		this.map = new naver.maps.Map('map', {
			center: new naver.maps.LatLng(37.3595704, 127.105399),
			zoom: 5
		});
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
