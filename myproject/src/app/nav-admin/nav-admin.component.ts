import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedServiceService } from '../shared-service.service';
@Component({
  selector: 'app-nav-admin',
  templateUrl: './nav-admin.component.html',
  styleUrls: ['./nav-admin.component.css']
})
export class NavAdminComponent {
  constructor(private router:Router,private _shared:SharedServiceService){}
goToChat(){
  this.router.navigate(["/Chat"])
  }
goToWeather(){

  this.router.navigate(["/Weather"])
}
goToTestings(){
  this.router.navigate(["/Tests"])
}
goToAddmember(){
  this.router.navigate(["/AddMemeber"])
}

goToApprovetest(){
  this.router.navigate(["/ApproveTest"])
}



 
ngOnInit(): void {


}


}



