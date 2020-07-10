import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOrbComponent } from './form-orb.component';

describe('FormOrbComponent', () => {
  let component: FormOrbComponent;
  let fixture: ComponentFixture<FormOrbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormOrbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormOrbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
