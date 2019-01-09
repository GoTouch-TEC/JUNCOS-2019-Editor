import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DataTableEventosDataSource } from './data-table-eventos-datasource';

@Component({
  selector: 'app-data-table-eventos',
  templateUrl: './data-table-eventos.component.html',
  styleUrls: ['./data-table-eventos.component.css']
})
export class DataTableEventosComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: DataTableEventosDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new DataTableEventosDataSource(this.paginator, this.sort);
  }
}
