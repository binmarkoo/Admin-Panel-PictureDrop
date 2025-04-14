import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http : HttpClient) { }
  

  getAllUsers(){
    this.http.get("/api/users").subscribe(users=>{
      return users
    })
  }
  
  getUserbyID(id : string){
    this.http.get("/api/users/"+id).subscribe(user=>{
      return user
    })
  }

  /*
  this.UsersService.methodnameAPi.subscribe(value=>{console.log(value)})

  */

}
