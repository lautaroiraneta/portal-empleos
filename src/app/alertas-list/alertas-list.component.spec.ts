import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertasListComponent } from './alertas-list.component';

describe('AlertasListComponent', () => {
  let component: AlertasListComponent;
  let fixture: ComponentFixture<AlertasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
