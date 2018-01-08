import { Component, Input } from '@angular/core';

import { BootstrapperService } from './services/bootsrapper.service';

@Component({
	selector : 'workload-item',
	templateUrl : './views/item.component.html'
})
export class WorkloadItem {

	constructor( private _BootstrapperService : BootstrapperService ) {}
	
	@Input() item;
	public bootstrapDataThemes;

	ngOnInit() {
		this.bootstrapDataThemes =  this._BootstrapperService.getBootstrapDataThemes();
	}

}