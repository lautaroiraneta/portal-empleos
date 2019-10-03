import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarConocimientosComponent } from './agregar-conocimientos.component';

describe('AgregarConocimientosComponent', () => {
  let component: AgregarConocimientosComponent;
  let fixture: ComponentFixture<AgregarConocimientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarConocimientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarConocimientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
