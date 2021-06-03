import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'modal-window',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() public display: string = 'none';
  @Input('header-caption') public header: string = 'Modal';
  constructor() { }

  ngOnInit(): void {
  }

  public fnClose(): void{
    this.display = 'none';
  }
  showModal(): void{
    this.display = 'block';
  }
  close(): void{
    this.close();
  }
  setModalTitle(args: string): void{
    this.header = args;
  }
}
