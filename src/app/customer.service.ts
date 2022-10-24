import { Injectable } from '@angular/core';
// @ts-ignore
import {Customer} from '../customer/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customer: Customer[] = [{
    id: 1,
    name: 'Hiếu',
    age: 18,
    address: 'Lào Cai'
  },
    {
      id: 1,
      name: 'Ba',
      age: 20,
      address: 'Thai Binh'
    },
    {
      id: 1,
      name: 'Nam',
      age: 19,
      address: 'Việt Nam'
    },

  ];

  constructor() { }
  getAll() {
    return this.customer;
  }
  addCustomer(customer: Customer) {
    this.customer.push(customer);
  }
  deleteCustomer(id: number) {
    const idCustomer = this.customer.findIndex((customer: Customer) => {
      return customer.id === id;
    });
  }
  editCustomer(id: number, customerEdit: Customer) {
    const idCustomer = this.customer.findIndex((customer: Customer) => {
      return customer.id === id;
    });
  }
}
