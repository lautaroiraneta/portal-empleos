import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtapaIngresoAlumnoListComponent } from './etapa-ingreso-alumno-list.component';

describe('EtapaIngresoAlumnoListComponent', () => {
  let component: EtapaIngresoAlumnoListComponent;
  let fixture: ComponentFixture<EtapaIngresoAlumnoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtapaIngresoAlumnoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtapaIngresoAlumnoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
