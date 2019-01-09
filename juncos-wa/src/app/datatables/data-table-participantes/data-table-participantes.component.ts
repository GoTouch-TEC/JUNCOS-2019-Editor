import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DataTableParticipantesDataSource } from './data-table-participantes-datasource';

@Component({
  selector: 'app-data-table-participantes',
  templateUrl: './data-table-participantes.component.html',
  styleUrls: ['./data-table-participantes.component.css']
})
export class DataTableParticipantesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: DataTableParticipantesDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new DataTableParticipantesDataSource(this.paginator, this.sort);
  }
}
