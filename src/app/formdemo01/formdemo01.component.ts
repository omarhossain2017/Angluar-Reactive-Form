
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-formdemo01',
  templateUrl: './formdemo01.component.html',
  styleUrls: ['./formdemo01.component.css']
})
export class Formdemo01Component implements OnInit {


  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  profileForm = this.fb.group({
    firstName: ['',[Validators.required,Validators.minLength(4)]],
    lastName: ['',Validators.required,],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: ['',Validators.required],
      zip: ['']
    }),
  });
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
   // console.warn(this.name.value);
  //  console.warn(this.first.value);
  }

  get firstName(): any { return this.profileForm.get('firstName'); }

  get name(): any { return this.profileForm.get('address'); }

  get first(): any { return this.profileForm.get('address.state'); }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street'
      }
    });
  }


}
