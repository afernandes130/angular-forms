import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorsMessagesComponent } from './errors-messages.component';

describe('ErrorsMessagesComponent', () => {
  let component: ErrorsMessagesComponent;
  let fixture: ComponentFixture<ErrorsMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorsMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorsMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
