import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  private url = 'http://127.0.0.1:3000/member/';

  constructor(private http: HttpClient) {
   }
  newMember(name:string,firstname:string,email:string,password:string){
    console.log({ name, firstname,email,password })
    return this.http.post(this.url+"register", { name, firstname,email,password })
  }

  getMembers(){ 
    console.log(this.http.get(this.url + 'get'))
    return this.http.get(this.url + 'get');
   }

   deleteMember(id: string) {
    return this.http.delete(`${this.url}/delete/${id}`);
  }

  login(member:any){
    return this.http.post(this.url+"login", member)
  }

  


  }
