import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterOutlet} from '@angular/router';
// @ts-ignore
import { CustomerComponent } from './customer/customer.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
