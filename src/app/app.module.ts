import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';


import 'hammerjs';
import { AppComponent } from './app.component';
import { InfoTeamsComponent } from './components/info-teams/info-teams.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material-module/material.module';
import {AppRoutingModule} from './routing/routing.module';
import { WelcomeComponent } from './components/welcome/welcome.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ClansService} from './service/clans/clans.service';
import {AppErrorHandler} from './commons/errors/app-error-handler';
import {AppHttp} from './commons/http/app-http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InfoRivalComponent } from './components/info-rival/info-rival.component';
import { InfoMeComponent } from './components/info-me/info-me.component';
import { OverviewComponent } from './components/clan/overview/overview.component';
import { MembersComponent } from './components/clan/members/members.component';
import { WarLogComponent } from './components/clan/war-log/war-log.component';
import { CurrentWarComponent } from './components/clan/current-war/current-war.component';
import { EncodingUriPipe } from './pipes/encoding-uri.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InfoTeamsComponent,
    WelcomeComponent,
    NavbarComponent,
    InfoRivalComponent,
    InfoMeComponent,
    OverviewComponent,
    MembersComponent,
    WarLogComponent,
    CurrentWarComponent,
    EncodingUriPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ClansService,
    AppHttp,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
