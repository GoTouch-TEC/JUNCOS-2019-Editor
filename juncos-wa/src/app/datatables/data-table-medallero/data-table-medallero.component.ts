import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DataTableMedalleroDataSource } from './data-table-medallero-datasource';


@Component({
  selector: 'app-data-table-medallero',
  templateUrl: './data-table-medallero.component.html',
  styleUrls: ['./data-table-medallero.component.css']
})

export class DataTableMedalleroComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: DataTableMedalleroDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name','perro'];

  ngOnInit() {
    this.dataSource = new DataTableMedalleroDataSource(this.paginator, this.sort);
  }
}
