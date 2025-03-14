import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) 
  {}

  notes = [{id:0,text:'Hello World!'},{id:1,text:'Hello World1!'},{id:2,text:'Hello World2!'}];

  getData(){
    this.http.get("/api/todos").subscribe(value =>{
      console.log(value)
    })
  }
}
