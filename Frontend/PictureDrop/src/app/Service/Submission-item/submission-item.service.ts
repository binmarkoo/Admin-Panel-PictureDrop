import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubmissionItemService {

  constructor(private http : HttpClient) { }

  getAllSubmissionItems(){
    this.http.get("/api/submission-item").subscribe(submissionItem=>{
      return submissionItem
    })
  }

  getSubmissionItembyID(id:string){
    this.http.get("/api/submission-item/"+id).subscribe(submissionItem=>{
      return submissionItem
    })
  }

  

}
