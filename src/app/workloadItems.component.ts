import { Component } from '@angular/core';

import { TodoService } from './services/todo.service';
import { BootstrapperService } from './services/bootsrapper.service';

@Component({
	selector : 'workload-items',
	templateUrl : './views/workloadItems.component.html'
})
export class WorkloadItems {

	constructor( private _TodoService : TodoService, private _BootstrapperService : BootstrapperService ) {}
	
	public items = {};
	public bootstrapData;
	public bootstrapDataThemes;

	ngOnInit() {
		this._TodoService.getTodayToDos().subscribe( (responseObj) =>
			{this.items = responseObj.todos;}
		);
		this.bootstrapData =  this._BootstrapperService.getBootstrapData();
		this.bootstrapDataThemes =  this._BootstrapperService.getBootstrapDataThemes();
	}
}