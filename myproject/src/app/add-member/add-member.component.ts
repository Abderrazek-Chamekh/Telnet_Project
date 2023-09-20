import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MembersService } from '../members.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {
  constructor(private router:Router,private _Member:MembersService){
    
  }
  name=""
  firstname=""
  email=""
  password=""
  members:any
  

  saveMember() {
    console.log('sdqsddqs')
    this._Member.newMember(this.name, this.firstname,this.email,this.password)
    .subscribe(
      (res)=>{
        this.router.navigate(['/AddMemeber'])},

    )
   window.location.reload();

  }
  getMembers()
  {
    this._Member.getMembers()
      .subscribe(
        res=>{
          console.log(res)
          this.members=res
          },
        err=>{console.log(err)}
          
          );
          
        }

  removeMember(id: string){
  console.log(id)
  this._Member.deleteMember(id).subscribe(
    (response) => {
      console.log('User deleted successfully:', response);
    },
    (error) => {
      console.error('Failed to delete user:', error);
    }
  );
  window.location.reload();

  }

  

  goToHome(){
    this.router.navigate(["/Admin"])
    }
   

    ngOnInit(): void {
     this.getMembers()
      
    }

}
