import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TestsService {
  private url = 'http://127.0.0.1:3000/test/';

  constructor(private http: HttpClient) { }

  newTest(Action: string, Status:string,Priority:string,Time_Limit:string,Responsible:string,Accomplished:string,Remarks:string,Is_Validated:boolean ){
    console.log({ Action, Status,Priority,Time_Limit,Responsible,Accomplished,Remarks})
    return this.http.post(this.url+"add", { Action, Status,Priority,Time_Limit,Responsible,Accomplished,Remarks,Is_Validated})
  }
  getTests(){
    console.log(this.http.get(this.url + 'get'))
    return this.http.get(this.url + 'get');
   }


   deleteTest(id: string) {
    return this.http.delete(`${this.url}/delete/${id}`);
  }

  updateTest(id: string, Action: string, Status:string,Priority:string,Time_Limit:string,Responsible:string,Accomplished:string,Remarks:string,Is_Validated:boolean) {
     console.log({ Action, Status,Priority,Time_Limit,Responsible,Accomplished,Remarks,Is_Validated})
    return this.http.put(this.url+"/update/"+id,{ Action, Status,Priority,Time_Limit,Responsible,Accomplished,Remarks,Is_Validated});
  }

  
}
