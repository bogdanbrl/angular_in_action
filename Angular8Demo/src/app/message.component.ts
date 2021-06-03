import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'message-info',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {

  @Input() public message :string = '';
  @Input('alert-pop') public message1 :string = '';

  @Output() onSignUp =new EventEmitter<any>();

  public data: any={};

  public showAlert(): void{
    alert(this.message1);
  }

  public onSubmit() :void{
    this.onSignUp.emit(this.data);
  }
  
}
