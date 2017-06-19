import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommentService{
	private header:Headers;

	constructor(private http:Http){
		this.header = new Headers({'Content-Type':'application/json'});
	}

	create(input){
		return this.http.post('/api/study/new_comment', input,{headers:this.header})
			.map(res=>res.json());
	}
	list(input){
		return this.http.post('/api/study/list_comment', input, {headers:this.header})
			.map(res=>res.json());
	}
	del(input){
		return this.http.get('/api/study/del_comment/'+input, {headers:this.header})
			.map(res=>res.json());
	}
}