import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelativeFormsComponent } from './relative-forms.component';

describe('RelativeFormsComponent', () => {
  let component: RelativeFormsComponent;
  let fixture: ComponentFixture<RelativeFormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelativeFormsComponent]
    });
    fixture = TestBed.createComponent(RelativeFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
