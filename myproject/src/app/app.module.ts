import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ChatComponent } from './chat/chat.component';
import { WeatherComponent } from './weather/weather.component';
import { TestsComponent } from './tests/tests.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { LoginComponent } from './login/login.component';
import { IonicModule } from '@ionic/angular';
import { ApproveTestComponent } from './approve-test/approve-test.component';
import { NavAdminComponent } from './nav-admin/nav-admin.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    ChatComponent,
    WeatherComponent,
    TestsComponent,
    AdminComponent,
    AddMemberComponent,
    LoginComponent,
    ApproveTestComponent,
    NavAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    IonicModule.forRoot(),
    HttpClientModule
  ],
  providers: [NavBarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
