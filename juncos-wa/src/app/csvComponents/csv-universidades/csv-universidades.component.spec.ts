import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvUniversidadesComponent } from './csv-universidades.component';

describe('CsvUniversidadesComponent', () => {
  let component: CsvUniversidadesComponent;
  let fixture: ComponentFixture<CsvUniversidadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsvUniversidadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvUniversidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
