import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customList: Customer[] = [];
  addCustomer(form){
    let customer: Customer;
    customer = form.value;
    this.customList.push(customer);
    console.log(form.value);
  }
  constructor() {
  }
  ngOnInit(): void {
    }
  }

