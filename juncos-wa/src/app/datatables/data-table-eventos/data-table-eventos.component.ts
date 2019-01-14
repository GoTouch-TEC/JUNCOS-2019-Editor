import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DataTableEventosDataSource } from './data-table-eventos-datasource';
import { GetCollections } from '../../services/getCollections.service'
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr'
import {EventosInterface,displayedColumns as dc} from '../../interfaces/EventoInterface'

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


  // Esto contiene las columnas que se van a mostrar en la tabla
  displayedColumns = dc;

  ngOnInit() {
    this.dataSource = new DataTableEventosDataSource(this.paginator, this.sort, this.service);
  }
}

