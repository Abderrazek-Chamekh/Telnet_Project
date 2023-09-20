import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor(private router:Router){}

  goToChat(){
    this.router.navigate(["/Chat"])
    }
  goToWeather(){
  
    this.router.navigate(["/Weather"])
  }
  goToTestings(){
    this.router.navigate(["/Tests"])
  }
  goToAddMember(){
    this.router.navigate(["AddMemeber"])
  }

}
