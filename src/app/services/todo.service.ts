import { Injectable } from '@angular/core';
import { Http, Response }  from '@angular/http';
import { Observable } from 'rxjs/Observable';

import './rxjs-operators';

@Injectable()
export class TodoService {

	constructor (private http: Http) {}

	getTodosByStatus(): Observable<any> {
		return this.http.get(`http://localhost:3000/api/todos/count`)
						.map((res:Response) => res.json());
	}

	getTodayToDos(): Observable<any> {
		return this.http.get(`http://localhost:3000/api/todos/today`)
						.map((res:Response) => res.json());
	}

	getOverdueToDos(): Observable<any> {
		return this.http.get(`http://localhost:3000/api/todos/overdue`)
						.map((res:Response) => res.json());
	}

	createToDo(reqTodo : Object): Observable<any> {
		return this.http.post(`http://localhost:3000/api/todos/add`, reqTodo)
						.map((res:Response) => res.json())
	}

}