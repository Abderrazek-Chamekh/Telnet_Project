import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedServiceService } from '../shared-service.service';
import { TestsService } from '../tests.service';

@Component({
  selector: 'app-approve-test',
  templateUrl: './approve-test.component.html',
  styleUrls: ['./approve-test.component.css']
})
export class ApproveTestComponent {
 
  constructor(private router:Router,private _Test:TestsService,private _shared:SharedServiceService){   
  }

  
  rows:any;
  Valid:any
  Test_id:any

  goToHome(){
    this.router.navigate(["/Admin"])
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
    approveTest(index: number){
      this.Test_id=this.rows[index]._id
      console.log(this.Test_id)
      this._Test.updateTest(this.Test_id,this.rows[index].Action,this.rows[index].Status, this.rows[index].Priority,
                            this.rows[index].Time_Limit, this.rows[index].Responsible, this.rows[index].Accomplished,
                            this.rows[index].Remarks,true).subscribe(
                              (response) => {
                                console.log('User updated successfully:', response);
                              },
                              (error) => {
                                console.error('Failed to update user:', error);
                              }
                            );
      window.location.reload();
        

                            
      
      
      
  }

}
