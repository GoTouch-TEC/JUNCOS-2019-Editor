import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DataTableLugaresDataSource } from './data-table-lugares-datasource';

@Component({
  selector: 'app-data-table-lugares',
  templateUrl: './data-table-lugares.component.html',
  styleUrls: ['./data-table-lugares.component.css']
})
export class DataTableLugaresComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: DataTableLugaresDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new DataTableLugaresDataSource(this.paginator, this.sort);
  }
}
