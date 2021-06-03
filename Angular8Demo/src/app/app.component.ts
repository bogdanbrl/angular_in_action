import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Child2Component } from './child2/child2.component';
import { ModalComponent } from './modal/modal.component';
import { NgForm, Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //encapsulation: ViewEncapsulation.None,
  //encapsulation: ViewEncapsulation.ShadowDom,
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {

  public value1: number = 10;
  public array1: Array<number> = [10, 22, 14];
  public dt1: Date = new Date();

  public status: boolean = true;

  public returnString(): string {
    return "String return from function";
  }

  title = 'Component is the main Building Block in Angular';
  title2 = 'Angular 8 Sample';

  public showAlert(): void {
    console.log('You clicked on the button');
    alert("Click Event fired...");
  }

  public val: string = "";

  public val2: string = "This is alert popup message";

  public onSignup(data: any): void {
    let strMessage: string = "Thanks for Signup " + data.name + ". ";
    strMessage += "Email " + data.email + " has been registered successfully.";
    alert(strMessage);
  }


  showColor: boolean = false;
  //constructor(){  }

  public changeColor(): void {
    this.showColor = !this.showColor;
  }

  // ngIf in angular app
  showInfo: boolean = false;
  caption: string = 'Show text';

  constructor() { }
  public changeData(): void {
    this.showInfo = !this.showInfo;
    if (this.showInfo) {
      this.caption = 'Hide text';
    } else {
      this.caption = 'Show text';
    }
  }

  // ngFor in angular app
  productList: Array<string> = ['IPhone', 'Galaxy 9.0', 'Blackberry 10Z'];
  // constructor(){}

  // ngSwitch
  studentList: Array<any> = new Array<any>();
  // constructor(){}
  ngOnInit() {
    this.studentList = [
      { SrlNo: 1, Name: 'Bogdan Brl1', Course: 'Bsc(Hons)', Grade: 'A' },
      { SrlNo: 2, Name: 'Bogdan Brl2', Course: 'BA', Grade: 'B' },
      { SrlNo: 3, Name: 'Bogdan Brl3', Course: 'BCom', Grade: 'C' },
      { SrlNo: 4, Name: 'Bogdan Brl4', Course: 'Bsc(Hons)', Grade: 'A' },
      { SrlNo: 5, Name: 'Bogdan Brl5', Course: 'MBA', Grade: 'B' },
      { SrlNo: 6, Name: 'Bogdan Brl6', Course: 'MSc', Grade: 'C' },
      { SrlNo: 7, Name: 'Bogdan Brl7', Course: 'MBA', Grade: 'A' },
      { SrlNo: 8, Name: 'Bogdan Brl8', Course: 'MSc.', Grade: 'B' },
      { SrlNo: 9, Name: 'Bogdan Brl9', Course: 'MA', Grade: 'C' },
      { SrlNo: 10, Name: 'Bogdan Brl10', Course: 'B.tech', Grade: 'A' }
    ];


    this.todayDate = new Date();
    this.amount = 100;
    this.message2 = "Angular 8.0 is a aComponent Based Framework;"
    this.message3 = "This is a Custom Pipe";
  }



  // custom directive - color change
  // vezi si fisierul app.directive.ts si in app.module
  public message: string = 'Sample Demostration of Attribute Directives using Custom Directives';
  public color: string = 'blue';


  // Basic Pipes Demo
  // In this example, we will demonstrate how to use the inbuilt pipes in Angular 8.

  public todayDate: Date;
  public amount: number;
  public message2: string;
  //constructor(){}
  // ngOnInit(): void {
  //   thsis.todayDate = new Date();
  //   this.amount = 100;
  //   this.message2 = "Angular 8.0 is a aComponent Based Framework;"
  // }


  /* Custom pipe - proper pipe */
  public message3: string;
  /* 
    public message3: string;
    constructor(){ } 
    ngOnInit(): void {
      this.message3 = "This is a Custom Pipe";
    }*/

  /* ViewChild decorator within a component */
  public result: string = '';
  @ViewChild(Child2Component, { static: true }) private _calculator: Child2Component;
  /* constructor(){} */
  public add(value: number): void {
    this.result = 'Result of Addition ' + value;
  }

  public substract(value: number): void {
    this.result = 'Result of substract ' + value;
  }
  public multiply(value: number): void {
    this.result = 'Result of multiply ' + value;
  }
  public divide(value: number): void {
    this.result = 'Result of division ' + value;
  }
  public reset(): void {
    this.result = '';
    this._calculator.clear();
  }

  /* ViewEncapsulation.None */
  public message4: string = "This is about ViewEncalsulation.None";
  // constructor(){}

  /* ng-content --- modal window --- */
  private caption2: string = 'Custom Modal';
  @ViewChild('modal', { static: true }) private _ctrlModal: ModalComponent;

  // constructor(){}
  //ngOnInit():void{}
  public fnOpenModal(): void {
    this._ctrlModal.showModal();
  }
  public fnHideModal(): void {
    this._ctrlModal.close();
  }


  // template driven form

  private formData: any = {};
  private showMessage: boolean = false;
  //constructor(){}
  //ngOnInit():void{}
  registerUser(formData: NgForm) {
    this.formData = formData.value;
    this.showMessage = true;
  }

  // model-driven form

//   private formModelDriven: any = {};
//   usernameModelDriven = new FormControl('', [
//       Validators.required,
//       Validators.minLength(5)
//     ]);
//   passwordModelDriven = new FormControl('', [
//       Validators.required
//   ]);
//   loginFormModelDriven: FormGroup = this.builder.group({
//       usernameModelDriven: this.usernameModelDriven,
//       passwordModelDriven: this.passwordModelDriven
//   });

// //constructor(private builder: FormBuilder){}
// //ngOnInit(): void{}
// private showMessageModelDriven: boolean = false;
// registerUserModelDriven(){
//   this.formModelDriven = this.loginFormModelDriven.value;
//   this.showMessageModelDriven = true;
// }























}
