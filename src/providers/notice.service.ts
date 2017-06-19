import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import "rxjs/add/operator/map";
import { Observable } from 'rxjs/Observable';
import { Notice } from '../vo/notice';

@Injectable()
export class NoticeService{
	private header:Headers;

	constructor(private http:Http){
		this.header = new Headers({'Content-Type':'application/json'});
	}

	create(input){
		return this.http.post('/api/study/new_notice', input, {headers:this.header})
			.map(res=>res.json());
	}
	getCnt(){
		return this.http.get('/api/study/getCnt_notice', {headers:this.header})
			.map(res=>res.json());
	}
	list(){
		return this.http.get('/api/study/list_notice', {headers:this.header})
			.map(res=>res.json());
	}
	pagingList(input){
		return this.http.get('/api/study/paging_notice/'+input, {headers:this.header})
			.map(res=>res.json());
	}
	getOne(input){
		return this.http.get('/api/study/getOne_notice/'+input, {headers:this.header})
			.map(res=>res.json());
	}
	update(input){
		return this.http.post('/api/study/update_notice', input, {headers:this.header})
			.map(res=>res.json());
	}
	delete(input){
		return this.http.get('/api/study/delete_notice/'+input, {headers:this.header})
			.map(res=>res.json());
	}
	forIndex(){
		return this.http.get('/api/study/getIndex_notice', {headers:this.header})
			.map(res=>res.json());
	}
}