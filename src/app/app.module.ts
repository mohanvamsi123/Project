import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatChipsModule} from '@angular/material/chips';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { ItemsComponent } from './items/items.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatButtonModule } from '@angular/material/button';
import { CustomersComponent } from './popup/customers/customers.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './interceptor/api.interceptor';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ItemListComponent } from './item-list/item-list.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RegSalesComponent } from './reg-sales/reg-sales.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { SalesTableComponent } from './sales-table/sales-table.component';
import { MatTableModule } from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoicePopupComponent } from './invoice-popup/invoice-popup.component';
import {NgxPrintModule} from 'ngx-print';
import { LoaderComponent } from './loader/loader.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ResizeObserverDirective } from './directive/resize-observer.directive';
import { SearchPipe } from './pipes/search.pipe';
import {MatTabsModule} from '@angular/material/tabs';
import { TransactionsComponent } from './transactions/transactions.component';
import { SaleDatesComponent } from './transactions/sale-dates/sale-dates.component';
import { PaymentPopupComponent } from './transactions/payment-popup/payment-popup.component';
import { CustomerNameComponent } from './customer-name/customer-name.component';



@NgModule({
  declarations: [
    AppComponent,
    AddCustomerComponent,
    SidenavComponent,
    ItemsComponent,
    ToolbarComponent,
    CustomersComponent,
    ItemListComponent,
    RegSalesComponent,
    SalesTableComponent,
    InvoiceComponent,
    InvoicePopupComponent,
    LoaderComponent,
    ResizeObserverDirective,
    SearchPipe,
    TransactionsComponent,
    SaleDatesComponent,
    PaymentPopupComponent,
    CustomerNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatNativeDateModule,
    MatChipsModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTableModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    NgxPrintModule,
    FormsModule,
    MatTabsModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
