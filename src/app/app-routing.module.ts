import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from '../app/add-customer/add-customer.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ItemsComponent } from './items/items.component';
import { RegSalesComponent } from './reg-sales/reg-sales.component';
import { GetProfileResolver } from './resolver/get-profile.resolver';

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
  },{
    path: 'invoice',
    component: InvoiceComponent

  },

  {
    path: 'customers/sales',
    component: RegSalesComponent,
    resolve:{
      getprofile:GetProfileResolver

    } 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
