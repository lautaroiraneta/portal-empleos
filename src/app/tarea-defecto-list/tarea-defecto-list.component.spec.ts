import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaDefectoListComponent } from './tarea-defecto-list.component';

describe('TareaDefectoListComponent', () => {
  let component: TareaDefectoListComponent;
  let fixture: ComponentFixture<TareaDefectoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareaDefectoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaDefectoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
