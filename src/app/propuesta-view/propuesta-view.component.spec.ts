import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropuestaViewComponent } from './propuesta-view.component';

describe('PropuestaViewComponent', () => {
  let component: PropuestaViewComponent;
  let fixture: ComponentFixture<PropuestaViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropuestaViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropuestaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
