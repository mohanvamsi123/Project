import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetCustomer } from '../interface/get-customer';
import { GetItems } from '../interface/get-items';
import { GetSales } from '../interface/get-sales';
import { PostItems } from '../interface/post-items';
import { PostSales } from '../interface/post-sales';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  invoicestring={
    "from":"SVF Flower Stall\nRaitu Bazar\nNear RTC Bust Stand\nGuntur\nAndhra Pradesh\nIndia-522002",
    "to":"",
    "currency":"INR",
    "shipping_title":"Previous Balance",
    "items": [
  ],
  "custom_fields": [
    {
      "name": "Account Number",
      "value": "CUST-456"
    }
  ],
  "fields": {
    "discounts": false,
    "shipping": true
  },
  "shipping": 15,
  "notes": "Thanks for being an awesome customer!"
}

  constructor(private http: HttpClient) { }

  newCustomer(data: any): Observable<any> {
    return this.http.post(`${environment.api_url}/emp/controller/postDetails`, JSON.stringify(this.createObject(data)));
  }

  getCustomer(id?: number): Observable<GetCustomer[] | GetCustomer> {
    if (id) {
      return this.http.get<GetCustomer>(`${environment.api_url}/emp/controller/getDetails/${id}`);
    } else {
      return this.http.get<GetCustomer[]>(`${environment.api_url}/emp/controller/getDetails`);
    }
  }

  editCustomer(id: number, data: any): Observable<any> {
    return this.http.put(`${environment.api_url}/emp/controller/putDetails/${id}`, this.createObject(data));
  }


  postItems(data: PostItems): Observable<any> {
    return this.http.post(`${environment.api_url}/item/controller/postDetails`, JSON.stringify(data));
  }

  getItems(): Observable<GetItems[]> {
    return this.http.get<GetItems[]>(`${environment.api_url}/item/controller/getDetails`);
  }

  updateStatus(id: number): Observable<any> {
    return this.http.put(`${environment.api_url}/item/controller/putDetails/${id}`, JSON.stringify(null));
  }


  regSales(data: PostSales): Observable<any> {
    return this.http.post(`${environment.api_url}/price/controller/postDetails`, JSON.stringify(data));
  }

  getSales(userid:number): Observable<GetSales[]> {
    return this.http.get<GetSales[]>(`${environment.api_url}/price/controller/getDetails/${userid}`);
  }

  getInvoice(customerdetails:string,items:[]):Observable<any>{
    this.invoicestring.items=items;
    this.invoicestring.to=customerdetails;
    console.log(JSON.stringify(this.invoicestring));
    return this.http.post('https://invoice-generator.com',JSON.stringify(this.invoicestring));
  }




  createObject(data: any) {
    console.log(data);
    let output: any = {
      address: {}
    };
    output["firstName"] = data.name;
    output["lastName"] = data.name;
    output["phone_no"] = data.mobile;
    output["address"]["city"] = data.city;
    output["address"]["shopname"] = data.store;
    return output
  }
}
