import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkspacesService {

  constructor(private http: HttpClient) { }

  getAllWokspaces(){
    this.http.get("/api/workspaces").subscribe(workspaces=>{
      return workspaces
    })
  }

  getWorkspaceById(){
    this.http.get("/api/workspaces").subscribe(workspaces =>{
      return workspaces
    })
  }
}
