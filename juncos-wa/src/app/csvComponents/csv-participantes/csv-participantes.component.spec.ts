import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvParticipantesComponent } from './csv-participantes.component';

describe('CsvParticipantesComponent', () => {
  let component: CsvParticipantesComponent;
  let fixture: ComponentFixture<CsvParticipantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsvParticipantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvParticipantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
