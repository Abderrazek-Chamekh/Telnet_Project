import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ChatComponent } from './chat/chat.component';
import { WeatherComponent } from './weather/weather.component';
import { TestsComponent } from './tests/tests.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { ApproveTestComponent } from './approve-test/approve-test.component';

const routes: Routes =[
{path:"",redirectTo:"/Login",pathMatch:"full"},
{path:"Home",component:HomePageComponent},
{path:"Chat",component:ChatComponent},
{path:"Weather",component:WeatherComponent},
{path:"Tests",component:TestsComponent},
{path:"Login",component:LoginComponent},
{path:"Admin",component:AdminComponent},
{path:"AddMemeber",component:AddMemberComponent},
{path:"ApproveTest",component:ApproveTestComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
