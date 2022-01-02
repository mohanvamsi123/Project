import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddCustomerComponent} from '../app/add-customer/add-customer.component';
import {ItemsComponent} from './items/items.component';

const routes: Routes = [
  {
    path:'customers',
    component:AddCustomerComponent
  },
  {
    path:'items',
    component:ItemsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
