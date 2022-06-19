import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-angular-forms',
  templateUrl: './angular-forms.component.html',
  styleUrls: ['./angular-forms.component.css']
})
export class AngularFormsComponent implements OnInit {

  @ViewChild('formGroup') signupForm: NgForm;
  
  defaultQuestion = 'cricket';
  genders= ['Male', 'Female'];
  user = {
    fullName: '',
    email: '',
    favGame: '',
    gender: '',
  }

  // value: any;
  // form: any;
  // formGroup: any;
  submitted = false;
  
  constructor() { }

  ngOnInit(): void {

  }

  onClickSubmit(form: NgForm)  {
    this.submitted = true;
    this.user.fullName = this.signupForm.value.fname;
    this.user.email = this.signupForm.value.email;
    this.user.favGame = this.signupForm.value.game;
    this.user.gender = this.signupForm.value.gender;
    this.signupForm.reset();
  }

}
