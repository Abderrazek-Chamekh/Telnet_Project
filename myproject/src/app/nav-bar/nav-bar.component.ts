import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  
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


add=false
approve=false
addmember(){
  this.router.navigate(["/Login"])
 this._shared.setaddState(this.add) 
 this._shared.setapproveState(false)
}
approvetest()
{
  this.router.navigate(["/Login"])
  this._shared.setapproveState(this.approve)
  this._shared.setaddState(false)

}
 
ngOnInit(): void {


}


}
