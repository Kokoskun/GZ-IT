import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CalculateComponent } from './calculate/calculate.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { DefendComponent } from './defend/defend.component';

const appRoutes: Routes = [
  {
    path: '',
    component: CalculateComponent
  },
  {
    path: 'info',
    component: InfoComponent
  },
  {
    path: 'defend',
    component: DefendComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    CalculateComponent,
    InfoComponent,
    DefendComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
