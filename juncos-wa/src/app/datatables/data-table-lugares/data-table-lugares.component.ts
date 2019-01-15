import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DataTableLugaresDataSource } from './data-table-lugares-datasource';
import { GetCollections } from '../../services/getCollections.service'
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr'
import {LugarInterface,storedColumns as sc,displayedColumns as dc} from '../../interfaces/LugarInterface'

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

  // storedColumns contiene los nombres o id's del interface para traer los datos de cada objeto dinamicamente
  // displayedColumns contiene los nombres que van a ser mostrados en los headers de las columnas en la tabla
  displayedColumns = dc;
  storedColumns = sc;
  ngOnInit() {
    this.dataSource = new DataTableLugaresDataSource(this.paginator, this.sort, this.service);
  }
}
