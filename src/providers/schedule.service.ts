import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import "rxjs/add/operator/map";
import { Observable } from 'rxjs/Observable';
import { Schedule } from '../vo/schedule';

@Injectable()
export class ScheduleService{
	private header:Headers;

	constructor(private http:Http){
		this.header = new Headers({'Content-Type':'application/json'});
	}

	create(input){
		return this.http.post('/api/study/schedule', input, {headers:this.header})
			.map(res=>res.json());
	}
	update(input){
		return this.http.put('/api/study/schedule', input, {headers:this.header})
			.map(res=>res.json());
	}
	list(){
		return this.http.get('/api/study/list_schedule', {headers:this.header})
			.map(res=>res.json());
	}
	getOne(input){
		return this.http.get('/api/study/one_schedule/'+input, {headers:this.header})
			.map(res=>res.json());
	}
	forIndex(){
		return this.http.get('/api/study/getIndex_schedule', {headers:this.header})
			.map(res=>res.json());
	}
	recentSchedule(input){
		return this.http.post('/api/study/recentByStudy_schedule', input, {headers:this.header})
			.map(res=>res.json());
	}
}