import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DataTableMedalleroDataSource } from './data-table-medallero-datasource';
import { GetCollections } from '../../services/getCollections.service'
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr'
import {MedalleroInterface, displayedColumns as dc} from '../../interfaces/MedalleroInterface'

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

  // Esto contiene las columnas que se van a mostrar en la tabla
  displayedColumns = dc;

  ngOnInit() {
    this.dataSource = new DataTableMedalleroDataSource(this.paginator, this.sort, this.service);
  }
}

