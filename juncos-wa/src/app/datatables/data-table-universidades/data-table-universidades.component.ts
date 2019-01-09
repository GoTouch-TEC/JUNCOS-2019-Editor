import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DataTableUniversidadesDataSource } from './data-table-universidades-datasource';

@Component({
  selector: 'app-data-table-universidades',
  templateUrl: './data-table-universidades.component.html',
  styleUrls: ['./data-table-universidades.component.css']
})
export class DataTableUniversidadesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: DataTableUniversidadesDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new DataTableUniversidadesDataSource(this.paginator, this.sort);
  }
}
