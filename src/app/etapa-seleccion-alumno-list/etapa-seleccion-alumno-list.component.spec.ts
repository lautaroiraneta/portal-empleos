import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtapaSeleccionAlumnoListComponent } from './etapa-seleccion-alumno-list.component';

describe('EtapaSeleccionAlumnoListComponent', () => {
  let component: EtapaSeleccionAlumnoListComponent;
  let fixture: ComponentFixture<EtapaSeleccionAlumnoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtapaSeleccionAlumnoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtapaSeleccionAlumnoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
