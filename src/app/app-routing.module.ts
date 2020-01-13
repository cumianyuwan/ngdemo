import { NgModule } from '@angular/core';

import {RouterModule,Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import { AppComponent } from './app.component';
import {TestComponent} from './test/test.component';
import {MainComponent} from './main/main.component';

export const routes:Routes =[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {
    path: '',
    component:MainComponent,
    children:[
      {path:'home',component:LoginComponent},
      {path:'test',component:TestComponent}
    ]
  }
]

@NgModule({
  imports:[
    RouterModule.forRoot(
      routes,
    {enableTracing: true, useHash: true})
  ],

  exports:[
    RouterModule
  ],
  providers:[]
})
export class AppRoutingModule { }
