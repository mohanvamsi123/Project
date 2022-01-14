import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { GetCustomer } from '../interface/get-customer';
import { CustomersService } from '../services/customers.service';

@Injectable({
  providedIn: 'root'
})
export class GetProfileResolver implements Resolve<GetCustomer> { 
  constructor(private service: CustomersService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<GetCustomer> {
    return this.service.getCustomer(route?.queryParams["userid"]) as Observable<GetCustomer>;
  }
}
