import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvEventosComponent } from './csv-eventos.component';

describe('CsvEventosComponent', () => {
  let component: CsvEventosComponent;
  let fixture: ComponentFixture<CsvEventosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsvEventosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
