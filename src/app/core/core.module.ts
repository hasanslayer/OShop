import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NavComponent,
    LoginComponent,
    HomeComponent,
  ],
  exports:[
    NavComponent
  ]
})
export class CoreModule { }
