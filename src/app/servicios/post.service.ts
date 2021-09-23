import { Injectable} from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../modelos/post';
import {Global } from './global';

@Injectable()

export class PostService {
	public url:string;


	constructor (
		private _http: HttpClient

		){
		this.url= Global.url;
	}

	TestService () {

	return 'Probando el servicio de Angular'


	}

	mostrarPosts(): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.get(this.url+'posts', {headers: headers});
	}



}