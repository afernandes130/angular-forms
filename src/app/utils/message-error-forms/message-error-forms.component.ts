import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'message-error-forms',
  templateUrl: './message-error-forms.component.html',
  styleUrls: ['./message-error-forms.component.css']
})
export class MessageErrorFormsComponent implements OnInit {

@Input() errmsg : string

  constructor() { }

  ngOnInit(): void {
  }

}
