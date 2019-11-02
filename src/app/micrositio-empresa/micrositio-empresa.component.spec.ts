import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrositioEmpresaComponent } from './micrositio-empresa.component';

describe('MicrositioEmpresaComponent', () => {
  let component: MicrositioEmpresaComponent;
  let fixture: ComponentFixture<MicrositioEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicrositioEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrositioEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
