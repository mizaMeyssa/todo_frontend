import { Component, Input } from '@angular/core';

import { BootstrapperService } from './services/bootsrapper.service';

@Component({
  selector: 'kpi-card',
  templateUrl: './views/kpiCard.component.html'
})
export class KpiCardComponent {

	constructor ( private _BootstrapperService : BootstrapperService ) {}

	@Input() kpi;
	public bootstrapData;
	public bootstrapDataThemes;

	ngOnInit() {
		this.bootstrapData =  this._BootstrapperService.getBootstrapData();
		this.bootstrapDataThemes =  this._BootstrapperService.getBootstrapDataThemes();
		this.kpi.title = this.bootstrapData.statuses[this.kpi.id] + "TO DOs Today!";
	}

}