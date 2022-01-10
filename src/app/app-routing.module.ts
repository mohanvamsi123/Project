import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from '../app/add-customer/add-customer.component';
import { ItemsComponent } from './items/items.component';
import { RegSalesComponent } from './reg-sales/reg-sales.component';

const routes: Routes = [
  {
    path: 'customers',
    component: AddCustomerComponent,
    children: [


    ]
  },
  {
    path: 'items',
    component: ItemsComponent
  },

  {
    path: 'customers/sales',
    component: RegSalesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
