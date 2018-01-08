import { Component, Input } from '@angular/core';

import { TodoService } from './services/todo.service';

@Component({
  selector: 'dashboard',
  templateUrl: './views/dashboard.component.html'
})
export class DashboardComponent {

	constructor( private _TodoService : TodoService) {
	}

	public kpis = [];

	ngOnInit() {
		this._TodoService.getTodosByStatus().subscribe( (responseObj) => {
			let tmp_kpis = [];
			Object.keys(responseObj.counts).map(function(kpi) {
				tmp_kpis.push({
					id: kpi,
					count: responseObj.counts[kpi]
				});
			});
			this.kpis = tmp_kpis;
		});
	}

}


