import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtapaPasantiaCursoComponent } from './etapa-pasantia-curso.component';

describe('EtapaPasantiaCursoComponent', () => {
  let component: EtapaPasantiaCursoComponent;
  let fixture: ComponentFixture<EtapaPasantiaCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtapaPasantiaCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtapaPasantiaCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
