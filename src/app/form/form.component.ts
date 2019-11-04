import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Registration } from '../../model/registration';
import { Address } from 'cluster';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
 // profile: Registration;
  profile: String;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  profileForm = this.fb.group({

    userName:['',[Validators.required,Validators.pattern('([A-Za-z]+[0-9]|[0-9]+[A-Za-z])[A-Za-z0-9]*$')]],
   // userName:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    email: ['',[Validators.required,Validators.email]],
    password: ['',[Validators.required,Validators.minLength(8),Validators.pattern('^[a-zA-Z0-9_]{8,16}$')]],
    phone: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('^[0-9]*$')]],
    address: this.fb.group({
      street: ['',Validators.required],
      city: ['',Validators.required],
      state: ['',Validators.required],
      zip: ['',Validators.required]
    }),
    
  });




  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    this.profile=this.profileForm.value
   // console.warn(this.name.value);
  //  console.warn(this.first.value);
  }
  


  get userName(): any { return this.profileForm.get('userName'); }

  get email(): any { return this.profileForm.get('email'); }

  get password(): any { return this.profileForm.get('password'); }

  get phone(): any { return this.profileForm.get('phone'); }

  get street(): any { return this.profileForm.get('address.street'); }

  get city(): any { return this.profileForm.get('address.city'); }

  get state(): any { return this.profileForm.get('address.state'); }


  get zip(): any { return this.profileForm.get('address.zip'); }

}
