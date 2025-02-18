import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JSONComponent } from './json.component';

describe('JSONComponent', () => {
  let component: JSONComponent;
  let fixture: ComponentFixture<JSONComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JSONComponent]
    });
    fixture = TestBed.createComponent(JSONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
