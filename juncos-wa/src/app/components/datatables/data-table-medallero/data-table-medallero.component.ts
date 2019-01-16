import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DataTableMedalleroDataSource } from './data-table-medallero-datasource';
import { GetCollections } from '../../../services/getCollections.service'
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr'
import {MedalleroInterface,storedColumns as sc, displayedColumns as dc} from '../../../interfaces/MedalleroInterface'

@Component({
  selector: 'app-data-table-medallero',
  templateUrl: './data-table-medallero.component.html',
  styleUrls: ['./data-table-medallero.component.css']
})

export class DataTableMedalleroComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource: DataTableMedalleroDataSource;
  data: MedalleroInterface[];

  constructor(private service: GetCollections,
    private firestore: AngularFirestore,
    private toastr:ToastrService) { }
    
  // storedColumns contiene los nombres o id's del interface para traer los datos de cada objeto dinamicamente
  // displayedColumns contiene los nombres que van a ser mostrados en los headers de las columnas en la tabla
  displayedColumns = dc;
  storedColumns = sc;

  ngOnInit() {
    this.dataSource = new DataTableMedalleroDataSource(this.paginator, this.sort, this.service);
  }
}

