import { Component } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
// import classes which are required for reactive forms
import {FormBuilder,Validators} from '@angular/forms'


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  providers : [FormBuilder,Validators]
  
})
export class ContactComponent 
{
// Inject FormBuilder service
constructor(public fbobj : FormBuilder)
{
}

MarvellousForm = this.fbobj.group(
  {
    // Add Multiple validations
    username :['', [Validators.required, Validators.minLength(5)] ],
    passowrd : ['',Validators.required],
    ConfirmPass : [''],
  
  }
);


}
