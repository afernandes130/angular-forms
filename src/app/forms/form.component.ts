import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';

import { QuestionBase }              from './form-question/questions/question-base';
import { QuestionControlService }    from './form-question/questions/question-control.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  providers: [ QuestionControlService ]
})
export class FormComponent implements OnInit {

  @Input() questions: QuestionBase<string>[] = [];
  form: FormGroup;
  payLoad = '';
  arrayAnswer : any[] = []

  constructor(private qcs: QuestionControlService) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
    //this.onChanges()
  }


  // onChanges(): void {
  //   this.form.valueChanges.subscribe(val => {
  //    console.log(val)
  //   });
  // }

  getfillform() {
    console.log(this.form)

    Object.entries(this.form.value).forEach(([key, value]) => {
      this.questions.find(ans => {
        if (ans.key == key){
          let item = {}
          console.log(`ans ${ans.key} - value ${value} - key ${key}`)
          ans.value = value.toString();
          item["Inputid"] = ans.inputId
          item[ans.style] = value
          this.arrayAnswer.push(item)
        }
      })
    })

    console.log(this.arrayAnswer);
  }

  onSubmit() {
    this.getfillform()
    this.payLoad = JSON.stringify(this.arrayAnswer);
  }
}
