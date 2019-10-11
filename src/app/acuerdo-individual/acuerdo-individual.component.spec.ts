import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcuerdoIndividualComponent } from './acuerdo-individual.component';

describe('AcuerdoIndividualComponent', () => {
  let component: AcuerdoIndividualComponent;
  let fixture: ComponentFixture<AcuerdoIndividualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcuerdoIndividualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcuerdoIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
