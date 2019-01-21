import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvLugaresComponent } from './csv-lugares.component';

describe('CsvLugaresComponent', () => {
  let component: CsvLugaresComponent;
  let fixture: ComponentFixture<CsvLugaresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsvLugaresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvLugaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
