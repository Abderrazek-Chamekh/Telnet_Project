import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  add=false
  approve=false
  Tests: {Action: string; Status:string;Priority:string;Time_Limit:string;Responsible:string;Accomplished:string;Remarks:string }[] = [];

  constructor() { }

  setaddState(addState:boolean ){
    this.add=addState

  }
  setapproveState(approveState:boolean ){
    this.approve=approveState

  }
  


}
