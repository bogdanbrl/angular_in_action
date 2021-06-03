import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ChildComponent } from './child.component';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from './message.component';
import { AppComponent } from './app.component';
import { ColorChangeDirective } from './app.directive';
import { PropercasePipe } from './propercase.pipe';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    MessageComponent,
    ColorChangeDirective,
    PropercasePipe,
    Child2Component,
    Child3Component,
    ModalComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
