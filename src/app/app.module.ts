import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { LoginComponent } from './login/login.component';

import {routes} from './app-routing.module';
import { TestComponent } from './test/test.component';
import { MainComponent } from './main/main.component';
import { BlogComponent } from './blog/blog/blog.component';
import { CommentComponent } from './comments/comment/comment.component';
import { UserComponent } from './user/user/user.component';

import {SharedMaterialModule} from './SharedMaterialModule';
import { AppHeaderComponent } from './core/app-header/app-header.component';
import { AppFooterComponent } from './core/app-footer/app-footer.component';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestComponent,
    MainComponent,
    BlogComponent,
    CommentComponent,
    UserComponent,
    AppHeaderComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedMaterialModule,
    RouterModule.forRoot(
      routes,
      {
        useHash: false,
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled'
      }),
    BrowserAnimationsModule,
    SharedMaterialModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
