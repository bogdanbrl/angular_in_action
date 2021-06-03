import { Component } from '@angular/core';

@Component({
  selector: 'child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component {

  constructor() { }

  public title: string = "This is a Child3 Component"

}
