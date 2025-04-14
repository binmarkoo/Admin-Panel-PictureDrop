import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VouchersService {

  constructor(private http:HttpClient) { }

  getAllVouchers(){
    this.http.get("/api/vouchers").subscribe(vouchers =>{
      return vouchers
    })
  }

  getVoucherById(id : string){
      this.http.get("/api/vouchers/"+id).subscribe(vouchers =>{
        return vouchers
      })
  }

}
