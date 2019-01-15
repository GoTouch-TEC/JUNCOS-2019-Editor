import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvMedalleroComponent } from './csv-medallero.component';

describe('CsvMedalleroComponent', () => {
  let component: CsvMedalleroComponent;
  let fixture: ComponentFixture<CsvMedalleroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsvMedalleroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvMedalleroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
