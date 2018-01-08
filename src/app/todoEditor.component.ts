/*
 * Inspired from modal window component suggested by Stephan Paul [https://stackoverflow.com/users/1087131/stephen-paul]
 * https://stackoverflow.com/questions/34513558/angular-2-0-and-modal-dialog
 */

import { Component } from '@angular/core';
import { IMyDpOptions } from 'mydatepicker';

import { TODO } from './model/todo.model';

import { TodoService } from './services/todo.service';
import { BootstrapperService } from './services/bootsrapper.service';

@Component({
  selector: 'todo-editor',
  templateUrl: './views/todoEditor.component.html'
})

export class TodoEditor{

  constructor( private _BootstrapperService : BootstrapperService, private _TodoService : TodoService ) {}

  public visible : boolean = false;
  public visibleAnimate : boolean = false;
  public editorTitle : String = 'Create TO DO';
  public todo : TODO;
  public bootstrapData;

  private  today = new Date();

  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'mm.dd.yyyy',
    disableUntil: {year: this.today.getFullYear(), month: this.today.getMonth() + 1, day: this.today.getDate() - 1}
  };

  ngOnInit() {
    this.bootstrapData =  this._BootstrapperService.getBootstrapData();
    this.todo = new TODO();
    this.todo.eta = { date: { year:  this.today.getFullYear() , month: this.today.getMonth() + 1, day: this.today.getDate() } };
  }

  /*
    * Modal window specific fuctions
    */
  public show(): void {
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

  public onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
    }
  }

  /*
    * Editor specific fuctions
    */
  public save(){
    this._TodoService.createToDo({todo : this.todo}).subscribe(
      respObject => {this.hide();}
    );
  }

  public entitySelect($event, a) {
    console.log('here');
  }

}