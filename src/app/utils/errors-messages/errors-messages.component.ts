import { FormControl, FormGroup, ControlContainer } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-errors-messages',
  templateUrl: './errors-messages.component.html',
  styleUrls: ['./errors-messages.component.css']
})
export class ErrorsMessagesComponent implements OnInit {

@Input() control : FormControl;
msgError : string = "teste"

  constructor() { }

  ngOnInit(): void {
    this.ShowError;
  }

  get ShowError(){
    console.log(this.control);
    return this.msgError
  }

}
