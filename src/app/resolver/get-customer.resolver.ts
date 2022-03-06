import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { GetCustomer } from '../interface/get-customer';
import {CustomersService} from '../services/customers.service';

@Injectable({
  providedIn: 'root'
})
export class GetCustomerResolver implements Resolve<GetCustomer[] | GetCustomer> {
  constructor(private service: CustomersService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<GetCustomer[] | GetCustomer> {
    return this.service.getCustomer() as Observable<GetCustomer[] | GetCustomer>;
  }
}
