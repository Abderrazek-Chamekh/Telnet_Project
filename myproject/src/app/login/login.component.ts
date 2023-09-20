import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MembersService } from '../members.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {

  helper=new JwtHelperService;
  constructor(private router:Router,private _Member:MembersService){}

member={
  email:"",
  password:""
}

token:any

  login(){

this._Member.login(this.member)
    .subscribe(
      res=>{
        if(res !="member not found"){
          this.token=res
          localStorage.setItem('token',this.token.mytoken)
          let currentMember=this.helper.decodeToken(this.token.mytoken)
          let routing=currentMember.name
          console.log(currentMember)
          console.log(routing)
          if(routing=='admin'){
            this.router.navigate(['/Admin'])
            
          }
          else{
            this.router.navigate(['/Home'])

          }

        }
        else{
        }
        
      },
      err=>{
        console.log(err)
        alert("Email or Password is inccorect")
        
        this.member.email=""
        this.member.password=""
      }
    )

  }
  
 


ngOnInit(): void {
}



}


