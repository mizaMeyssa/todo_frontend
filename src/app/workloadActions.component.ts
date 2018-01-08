import { Component, ViewChild } from '@angular/core';
import { TodoEditor } from './todoEditor.component';

@Component({
	selector : 'workload-actions',
	templateUrl : './views/workloadActions.component.html' 
})
export class WorkloadActions {

	@ViewChild(TodoEditor) modal: TodoEditor;

	public createTodo() {
		this.modal.show();
	}
	
}