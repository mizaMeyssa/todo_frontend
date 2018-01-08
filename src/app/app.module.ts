import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MyDatePickerModule } from 'mydatepicker';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar.component';
import { DashboardComponent } from './dashboard.component';
import { KpiCardComponent } from './kpiCard.component';
import { AlertsPanel } from './alertsPanel.component';
import { Workload } from './workload.component';
import { WorkloadItems } from './workloadItems.component';
import { WorkloadItem } from './item.component';
import { WorkloadActions } from './workloadActions.component';
import { TodoEditor } from './todoEditor.component';

import { TodoService } from './services/todo.service';
import { BootstrapperService } from './services/bootsrapper.service';

import { CaptionFilter } from './filters/caption.filter';
import { MapToIterable } from './filters/iterable.filter';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    KpiCardComponent,
    AlertsPanel,
    Workload,
    WorkloadItems,
    WorkloadItem,
    WorkloadActions,
    TodoEditor,
    CaptionFilter,
    MapToIterable
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MyDatePickerModule,
    AppRoutingModule
  ],
  providers: [
    TodoService,
    BootstrapperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
