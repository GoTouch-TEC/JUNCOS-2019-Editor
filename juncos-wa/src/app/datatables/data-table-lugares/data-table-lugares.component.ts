import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DataTableLugaresDataSource } from './data-table-lugares-datasource';
import { GetCollections } from '../../services/getCollections.service'
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr'
import {LugarInterface,displayedColumns as dc} from '../../interfaces/LugarInterface'

@Component({
  selector: 'app-data-table-lugares',
  templateUrl: './data-table-lugares.component.html',
  styleUrls: ['./data-table-lugares.component.css']
})
export class DataTableLugaresComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  dataSource: DataTableLugaresDataSource;
  data: LugarInterface[];

  constructor(private service: GetCollections,
    private firestore: AngularFirestore,
    private toastr:ToastrService) { }

  // Esto contiene las columnas que se van a mostrar en la tabla
  displayedColumns = dc;

  ngOnInit() {
    this.dataSource = new DataTableLugaresDataSource(this.paginator, this.sort, this.service);
  }
}
