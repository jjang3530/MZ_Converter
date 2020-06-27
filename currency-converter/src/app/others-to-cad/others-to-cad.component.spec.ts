import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersToCadComponent } from './others-to-cad.component';

describe('OthersToCadComponent', () => {
  let component: OthersToCadComponent;
  let fixture: ComponentFixture<OthersToCadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OthersToCadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OthersToCadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
