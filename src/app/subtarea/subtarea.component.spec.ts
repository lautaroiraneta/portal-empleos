import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtareaComponent } from './subtarea.component';

describe('SubtareaComponent', () => {
  let component: SubtareaComponent;
  let fixture: ComponentFixture<SubtareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubtareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
