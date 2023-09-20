import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedServiceService } from '../shared-service.service';
import { TestsService } from '../tests.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Token } from '@angular/compiler';


@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent  {
  helper=new JwtHelperService;

  constructor(private router:Router, private _Test:TestsService){}
        i=0
        Action=""
        Status=""
        Priority=""
        Time_Limit=""
        Responsible=""
        Accomplished=""
        Remarks=""
        Is_Validated=false
        

        rows: any;
        first_row=false


  saveTest() {
    if (this.Action.trim() !== '' && this.Status.trim() !== '' && this.Priority.trim() !== '' && this.Time_Limit.trim() !== ''
          && this.Responsible.trim() !== '' && this.Accomplished.trim() !== '' ) 
          {
    this._Test.newTest(this.Action, this.Status,this.Priority,this.Time_Limit,this.Responsible,this.Accomplished,this.Remarks,this.Is_Validated)
    .subscribe(
      (res)=>{
        this.router.navigate(['/Tests'])}
    )   
    this.first_row=false
    this.Action=""
    this.Status=""
    this.Priority=""
    this.Time_Limit=""
    this.Responsible=""
    this.Accomplished=""
    this.Remarks=""
      }
    
  }

  addRow(){
        this.first_row=true
      }
      token:any
  goToHome(){
     this.token=localStorage.getItem('token')
    console.log(this.token)
    let currentMember=this.helper.decodeToken(this.token)
    console.log(currentMember)
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

    getTests()
    {
      this._Test.getTests()
        .subscribe(
          res=>{
            console.log(res);
            this.rows=res},
          err=>{console.log(err)}
            
            );

          }
  ngOnInit(): void {
    this.getTests() 


    }



}
