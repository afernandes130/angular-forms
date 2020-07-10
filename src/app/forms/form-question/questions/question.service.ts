import { Injectable }       from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase }     from './question-base';
import { TextboxQuestion }  from './question-textbox';
import { of } from 'rxjs';

@Injectable()
export class QuestionService {

  // TODO: get from a remote source of question metadata
  getQuestions() {

    let questions: QuestionBase<string>[] = [

      new DropdownQuestion({
        key: 'dpobrave',
        label: 'Bravery Rating',
        options: [
          {key: '1',  value: 'Solid'},
          {key: '2',  value: 'Great'},
          {key: '3',   value: 'Good'},
          {key: '4', value: 'Unproven'}
        ],
        order: 3,
        style: 'InputItemId',
        inputId: '300',
      }),

      new DropdownQuestion({
        key: 'dpobrave',
        label: 'Bravery Rating',
        options: [
          {key: '1',  value: 'Solid'},
          {key: '2',  value: 'Great'},
          {key: '3',   value: 'Good'},
          {key: '4', value: 'Unproven'}
        ],
        order: 3,
        style: 'InputItemId',
        inputId: '300',
      }),

      new TextboxQuestion({
        key: 'name',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1,
        style: 'TextValue',
        inputId: '100',
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2,
        style: 'TextValue',
        inputId: '200',
      })
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}
