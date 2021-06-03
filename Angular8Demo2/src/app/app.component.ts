import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //Template Driven Form
    public formData: any = {};
    public showMessage: boolean = false;
    public username: string = '';
    public password: string = '';
    public email: string = '';

    // constructor() {
    // }

    ngOnInit(): void {
    }

    registerUser(formdata: NgForm) {
        this.formData = formdata.value;
        this.showMessage = true;
    }


  // Model-Driven Form
    public formData2: any = {};
    public showMessage2: boolean = false;

  username2 = new FormControl('',[
    Validators.required,
    Validators.minLength(5)
]);

  password2 = new FormControl('',[
      Validators.required,
      hasExclamationMark
  ]);

  loginForm2: FormGroup = this.builder.group({
      username2: this.username2,
      password2: this.password2
  });


  constructor(private builder: FormBuilder) {
  }

  registerUser2() {
      this.formData2 = this.loginForm2.value;
      this.showMessage2 = true;
  }
}

function hasExclamationMark(input: FormControl) {
  const hasExclamation = input.value.indexOf('!') >= 0;
  return hasExclamation ? null : { needsExclamation: true };
}











