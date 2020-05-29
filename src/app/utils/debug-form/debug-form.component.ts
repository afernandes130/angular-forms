import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-debug-form',
  templateUrl: './debug-form.component.html',
  styleUrls: ['./debug-form.component.css']
})
export class DebugFormComponent implements OnInit {

  @Input() formulario : any;

  constructor() { }

  ngOnInit(): void {
  }

}
