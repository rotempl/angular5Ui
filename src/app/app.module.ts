import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MatIconModule} from '@angular/material';

import { AppComponent } from './app/app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { MessagesListComponent } from './messages-list/messages-list.component';
import {ActivityListComponent} from './activity-list/activity-list.component';
import { SalesChartComponent } from './sales-chart/sales-chart.component';
import { ReportChartComponent } from './report-chart/report-chart.component';
import { PeriodSelectorComponent } from './period-selector/period-selector.component';
import { TaskListPropertyComponent } from './task-list-property/task-list-property.component';
import { MessageListPropertyComponent } from './message-list-property/message-list-property.component';
import { ActivityListPropertyComponent } from './activity-list-property/activity-list-property.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SideBarComponent,
    TasksListComponent,
    MessagesListComponent,
    ActivityListComponent,
    SalesChartComponent,
    ReportChartComponent,
    PeriodSelectorComponent,
    TaskListPropertyComponent,
    MessageListPropertyComponent,
    ActivityListPropertyComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    MatIconModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
