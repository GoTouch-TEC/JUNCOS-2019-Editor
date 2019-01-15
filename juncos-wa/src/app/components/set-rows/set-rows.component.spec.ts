import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetRowsComponent } from './set-rows.component';

describe('SetRowsComponent', () => {
  let component: SetRowsComponent;
  let fixture: ComponentFixture<SetRowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetRowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
