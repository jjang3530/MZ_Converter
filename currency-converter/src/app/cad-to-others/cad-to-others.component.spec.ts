import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadToOthersComponent } from './cad-to-others.component';

describe('CadToOthersComponent', () => {
  let component: CadToOthersComponent;
  let fixture: ComponentFixture<CadToOthersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadToOthersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadToOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
