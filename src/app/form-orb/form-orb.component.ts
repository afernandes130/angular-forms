import { Component, OnInit, ViewChild, ChangeDetectorRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';

import { Observable, Subscriber, Subscription } from 'rxjs';
import { QuestionBase } from '../forms/form-question/questions/question-base';
import { QuestionService } from '../forms/form-question/questions/question.service';
import { FormComponent } from '../forms/form.component';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form-orb',
  templateUrl: './form-orb.component.html',
  styleUrls: ['./form-orb.component.css']
})
export class FormOrbComponent implements OnInit, AfterViewInit {

  //@ViewChild(FormComponent) sub: FormComponent;
  @ViewChildren(FormComponent) sub: QueryList<FormComponent>;

  questions$: Observable<QuestionBase<any>[]>
  questions2$ : QuestionBase<any>[]
  changeform : Subscription
  changetext : string;
  constructor(
      private questionService : QuestionService,
      private cdr: ChangeDetectorRef
      ) {

  }
  ngAfterViewInit(): void {
    this.sub.toArray().map(item =>{
      item.form.get('emailAddress').disable()
      item.form.patchValue({emailAddress : 'val.name'})
      item.form.controls['name'].valueChanges.subscribe(val => {
        console.log(val)
        item.form.patchValue({emailAddress :val })
    })});
    this.cdr.detectChanges();
  }

  ngOnInit(): void {
    this.fillform()
  }

  fillform(){
    this.questionService.getQuestions().subscribe(teste => {
      this.questions2$ = teste
    });
  }
}
