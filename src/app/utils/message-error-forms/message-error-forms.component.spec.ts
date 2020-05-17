import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageErrorFormsComponent } from './message-error-forms.component';

describe('MessageErrorFormsComponent', () => {
  let component: MessageErrorFormsComponent;
  let fixture: ComponentFixture<MessageErrorFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageErrorFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageErrorFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
