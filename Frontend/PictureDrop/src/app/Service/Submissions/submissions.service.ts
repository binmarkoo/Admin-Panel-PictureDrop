import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubmissionsService {

  constructor(private http:HttpClient) { }

  getAllSubmission(){
    this.http.get("/api/submissions").subscribe(submissions =>{
      return submissions
    })
  }

  getSubmissionById(id:string){
    this.http.get("/api/submissions/"+id).subscribe(submission =>{
      return submission
    })
  }

}
