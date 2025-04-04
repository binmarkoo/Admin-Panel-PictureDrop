import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http : HttpClient) { }

  /*
  this.UsersService.methodnameAPi.subscribe(value=>{console.log(value)})

  */

}
