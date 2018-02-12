import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserEventExperimentsComponent } from './browser-event-experiments/browser-event-experiments.component';
import { EventBusExperimentsComponent } from './event-bus-experiments/event-bus-experiments.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { LessonsCounterComponent } from './lessons-counter/lessons-counter.component';

// quick and dirty, I prefer this be in its own module but just slinging this out there to better organize course
const appRoutes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'browserevents', pathMatch: 'full', component: BrowserEventExperimentsComponent },
  { path: 'eventbus', pathMatch: 'full', component: EventBusExperimentsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BrowserEventExperimentsComponent,
    HomeComponent,
    EventBusExperimentsComponent,
    LessonsListComponent,
    LessonsCounterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
