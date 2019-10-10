import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlConocimientosPuestosComponent } from './control-conocimientos-puestos.component';

describe('ControlConocimientosPuestosComponent', () => {
  let component: ControlConocimientosPuestosComponent;
  let fixture: ComponentFixture<ControlConocimientosPuestosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlConocimientosPuestosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlConocimientosPuestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
