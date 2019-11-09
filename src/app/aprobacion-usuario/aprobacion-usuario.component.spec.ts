import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobacionUsuarioComponent } from './aprobacion-usuario.component';

describe('AprobacionUsuarioComponent', () => {
  let component: AprobacionUsuarioComponent;
  let fixture: ComponentFixture<AprobacionUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprobacionUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprobacionUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
