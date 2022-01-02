import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http:HttpClient) { }

  newCustomer(data:any):Observable<any>{
    return this.http.post(`${environment.api_url}/emp/controller/postDetails`,JSON.stringify(this.createObject(data)));
  }

  getCustomer():Observable<any>{
    return this.http.get(`${environment.api_url}/emp/controller/getDetails`);
  }

  editCustomer(id:any,data:any):Observable<any>{
     return this.http.put(`${environment.api_url}/emp/controller/putDetails/${id}`,this.createObject(data));
  }


  postItems(data:any):Observable<any>{
    return this.http.post(`${environment.api_url}/item/controller/postDetails`,JSON.stringify(data));
  }

  
  createObject(data:any){
    console.log(data);
    let output:any={
        address:{}
    };
    output["firstName"]=data.name;
    output["lastName"]=data.name;
    output["phone_no"]=data.mobile;
    output["address"]["city"]=data.city;
    output["address"]["shopname"]=data.store;
    return output
}
}
