import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConocimientoListComponent } from './conocimiento-list.component';

describe('ConocimientoListComponent', () => {
  let component: ConocimientoListComponent;
  let fixture: ComponentFixture<ConocimientoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConocimientoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConocimientoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
