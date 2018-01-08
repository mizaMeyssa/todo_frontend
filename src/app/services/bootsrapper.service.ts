import { Injectable } from '@angular/core';
import { Http, Response }  from '@angular/http';
import { Observable } from 'rxjs/Observable';

import './rxjs-operators';

@Injectable()
export class BootstrapperService {

	private bootstrapData = {
		statuses : {},
		types : {}
	};

	private bootstrapDataThemes = {
		statusColor : {
			'inProgress': 'teal',
			'done' : 'light-green',
			'pending' : 'orange',
		},
		statusIcon : {
			'inProgress': 'motorcycle',
			'done' : 'thumb_up',
			'pending' : 'alarm',
		}
	}

	constructor (private http: Http) {
		let statusesGet = this.http.get(`http://localhost:3000/api/statuses`);
		let typessGet = this.http.get(`http://localhost:3000/api/types`);
		Observable.forkJoin([statusesGet, typessGet]).subscribe(result => {
			let tmp_dict = {};
			result[0].json().statuses.map(function(status){
				tmp_dict[status._id] = status.label;
			});
			this.bootstrapData.statuses = tmp_dict;
			tmp_dict = {};
			result[1].json().types.map(function(type){
				tmp_dict[type._id] = type.label;
			});
			this.bootstrapData.types = tmp_dict;
		});
	}

	getBootstrapData(): Object {
		return this.bootstrapData;
		/*return this.http.get(`http://localhost:3000/api/statuses`)
						.map((res:Response) => {
							let tmp_dict = {};
							res.json().statuses.map(function(status){
								tmp_dict[status._id] = status.label;
							});
							this.bootstrapData.statuses = tmp_dict;
							return this.bootstrapData;
						});*/
	}

	getBootstrapDataThemes(): Object {
		return this.bootstrapDataThemes;
	}

	getTypes(): Observable<any> {
		return this.http.get(`http://localhost:3000/api/types`)
						.map((res:Response) => res.json());
	}

}