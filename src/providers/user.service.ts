import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import "rxjs/add/operator/map";
import { Observable } from 'rxjs/Observable';
import { User } from '../vo/user';
import { Study } from '../vo/study';

@Injectable()
export class UserService{
	private header:Headers;

	constructor(private http:Http){
		this.header = new Headers({'Content-Type':'application/json'});
	}
	userInsert(input:User){
		return this.http.post('/api/user/user_join', input, {headers:this.header})
			.map(res=>res.json());
	}
	userLogin(input:User){
		return this.http.post('/api/user/user_login', input, {headers:this.header})
			.map(res => res.json());
	}
	userLogout(){
		return this.http.get('/api/user/user_logout', {headers:this.header})
			.map(res => res.json());
	}
	userTest(input){
		return this.http.post('/api/user/user_test', input, {headers:this.header})
			.map(res => res.json());
	}
	chkSess(){
		return this.http.get('/api/user/sess', {headers:this.header});
	}
	userInfo(){
		return this.http.get('/api/user/user_info', {headers:this.header})
			.map(res => res.json());
	}
	
	/*
	 테스트용 함수들
	*/
	mapTest(){
		return this.http.get('/api/user/study_map_test', {headers:this.header})
			.map(res => res.json());
	}
	userPut(){
		return this.http.put('/api/user/put_test', {headers:this.header})
			.map(res => res.json());
	}
	userDelete(){
		return this.http.delete('/api/user/delete_test', {headers:this.header})
			.map(res => res.json());
	}
}
