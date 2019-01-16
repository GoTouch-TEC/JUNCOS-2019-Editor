import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DataTableEventosDataSource } from './data-table-eventos-datasource';
import { GetCollections } from '../../../services/getCollections.service'
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr'
import {EventosInterface,storedColumns as sc,displayedColumns as dc} from '../../../interfaces/EventoInterface'

@Component({
  selector: 'app-data-table-eventos',
  templateUrl: './data-table-eventos.component.html',
  styleUrls: ['./data-table-eventos.component.css']
})
export class DataTableEventosComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  dataSource: DataTableEventosDataSource;
  data: EventosInterface[];

  constructor(private service: GetCollections,
    private firestore: AngularFirestore,
    private toastr:ToastrService) { }


  // storedColumns contiene los nombres o id's del interface para traer los datos de cada objeto dinamicamente
  // displayedColumns contiene los nombres que van a ser mostrados en los headers de las columnas en la tabla
  displayedColumns = dc;
  storedColumns = sc;
  ngOnInit() {
    this.dataSource = new DataTableEventosDataSource(this.paginator, this.sort, this.service);
  }
}

