import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrositioComponent } from './micrositio.component';

describe('MicrositioComponent', () => {
  let component: MicrositioComponent;
  let fixture: ComponentFixture<MicrositioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicrositioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrositioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
