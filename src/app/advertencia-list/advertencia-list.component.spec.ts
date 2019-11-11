import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertenciaListComponent } from './advertencia-list.component';

describe('AdvertenciaListComponent', () => {
  let component: AdvertenciaListComponent;
  let fixture: ComponentFixture<AdvertenciaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertenciaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertenciaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
