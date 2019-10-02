import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaDefectoComponent } from './tarea-defecto.component';

describe('TareaDefectoComponent', () => {
  let component: TareaDefectoComponent;
  let fixture: ComponentFixture<TareaDefectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareaDefectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaDefectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
