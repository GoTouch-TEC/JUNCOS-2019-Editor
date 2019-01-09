import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';

import { DataTableParticipantesComponent } from './data-table-participantes.component';

describe('DataTableParticipantesComponent', () => {
  let component: DataTableParticipantesComponent;
  let fixture: ComponentFixture<DataTableParticipantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableParticipantesComponent ],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableParticipantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
