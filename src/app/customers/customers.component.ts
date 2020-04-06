import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomvalidationService} from '../services/customvalidation.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
 registerForm: FormGroup;
 submitted = false ;
  constructor(private fb: FormBuilder,
              private customValidator: CustomvalidationService) {
  }
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      contact: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
      gender: ['', Validators.required],
    });
    }
  get registerFormControl() {
    return this.registerForm.controls;
  }
    onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      alert('Thêm thành công \n');
      console.table(this.registerForm.value);
    }
    }
  }

