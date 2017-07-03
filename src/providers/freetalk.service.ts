import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import "rxjs/add/operator/map";
import { Observable } from 'rxjs/Observable';
import { Freetalk } from '../vo/freetalk';

@Injectable()
export class FreetalkService{
	private header:Headers;

	constructor(private http:Http){
		this.header = new Headers({'Content-Type':'application/json'});
	}

	create(input){
		return this.http.post('/api/study/freetalk', input, {headers:this.header})
			.map(res=>res.json());
	}
	getCnt(){
		return this.http.get('/api/study/getCnt_freetalk', {headers:this.header})
			.map(res=>res.json());
	}
	list(){
		return this.http.get('/api/study/list_freetalk', {headers:this.header})
			.map(res=>res.json());
	}
	pagingList(input){
		return this.http.get('/api/study/paging_freetalk/'+input, {headers:this.header})
			.map(res=>res.json());
	}
	getOne(input){
		return this.http.get('/api/study/getOne_freetalk/'+input, {headers:this.header})
			.map(res=>res.json());
	}
	update(input){
		return this.http.put('/api/study/freetalk', input, {headers:this.header})
			.map(res=>res.json());
	}
	delete(input){
		return this.http.delete('/api/study/freetalk/'+input, {headers:this.header})
			.map(res=>res.json());
	}
	forIndex(){
		return this.http.get('/api/study/getIndex_freetalk', {headers:this.header})
			.map(res=>res.json());
	}
}