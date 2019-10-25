import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferenciasListComponent } from './preferencias-list.component';

describe('PreferenciasListComponent', () => {
  let component: PreferenciasListComponent;
  let fixture: ComponentFixture<PreferenciasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreferenciasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferenciasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
