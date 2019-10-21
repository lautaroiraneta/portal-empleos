import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtapaCierrePasantiaListComponent } from './etapa-cierre-pasantia-list.component';

describe('EtapaCierrePasantiaListComponent', () => {
  let component: EtapaCierrePasantiaListComponent;
  let fixture: ComponentFixture<EtapaCierrePasantiaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtapaCierrePasantiaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtapaCierrePasantiaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
