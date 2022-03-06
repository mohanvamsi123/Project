import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { GetItems } from '../interface/get-items';
import { CustomersService } from '../services/customers.service';


@Injectable({
  providedIn: 'root'
})
export class GetItemsResolver implements Resolve<GetItems[]> {
  constructor(private service: CustomersService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<GetItems[]> {
    return this.service.getItems() as Observable<GetItems[]>
  }
}
