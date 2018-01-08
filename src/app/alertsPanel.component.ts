import { Component, Input } from '@angular/core';

import { TodoService } from './services/todo.service';
import { BootstrapperService } from './services/bootsrapper.service';

@Component({
	selector: 'alerts-panel',
	templateUrl: './views/alertsPanel.component.html'
})
export class AlertsPanel {

	constructor ( private _TodoService : TodoService, private _BootstrapperService : BootstrapperService ) {}

	public todos;
	public bootstrapData;
	public bootstrapDataThemes;

	ngOnInit() {
		this._TodoService.getOverdueToDos().subscribe( (responseObj) => {
			this.todos = responseObj.todos;
		});
		this.bootstrapData =  this._BootstrapperService.getBootstrapData();
		this.bootstrapDataThemes =  this._BootstrapperService.getBootstrapDataThemes();
	}

}