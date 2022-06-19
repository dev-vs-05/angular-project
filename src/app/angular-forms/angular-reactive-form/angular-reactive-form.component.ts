import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-angular-reactive-form',
  templateUrl: './angular-reactive-form.component.html',
  styleUrls: ['./angular-reactive-form.component.css']
})
export class AngularReactiveFormComponent implements OnInit {

  genders= ['Male', 'Female'];
  
  signUpForm: FormGroup;
  
  constructor() { }
  
  ngOnInit(): void {
    this.signUpForm = new FormGroup ({
      'userData': new FormGroup({
        'fname': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender': new FormControl(null)
    });
  }
  
  onSubmitReactiveForm() {
    console.log(this.signUpForm);
  }
  

}
