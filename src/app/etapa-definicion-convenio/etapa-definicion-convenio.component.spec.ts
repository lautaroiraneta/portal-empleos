import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtapaDefinicionConvenioComponent } from './etapa-definicion-convenio.component';

describe('EtapaDefinicionConvenioComponent', () => {
  let component: EtapaDefinicionConvenioComponent;
  let fixture: ComponentFixture<EtapaDefinicionConvenioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtapaDefinicionConvenioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtapaDefinicionConvenioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
