import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DataTableUniversidadesDataSource } from './data-table-universidades-datasource'
import { GetCollections } from '../../services/getCollections.service'
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr'
import {UniversidadInterface,storedColumns as sc,displayedColumns as dc} from '../../interfaces/UniversidadInterface'

@Component({
  selector: 'app-data-table-universidades',
  templateUrl: './data-table-universidades.component.html',
  styleUrls: ['./data-table-universidades.component.css']
})
export class DataTableUniversidadesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource: DataTableUniversidadesDataSource;
  data: UniversidadInterface[];

  constructor(private service: GetCollections,
    private firestore: AngularFirestore,
    private toastr:ToastrService) { }

  // storedColumns contiene los nombres o id's del interface para traer los datos de cada objeto dinamicamente
  // displayedColumns contiene los nombres que van a ser mostrados en los headers de las columnas en la tabla
  displayedColumns = dc;
  storedColumns = sc;

  ngOnInit() {

    this.dataSource = new DataTableUniversidadesDataSource(this.paginator, this.sort, this.service);
  
  }

  // onEdit(admin: UniversidadInterface) {
  //   this.service.formDataEventos = Object.assign({}, admin);
  // }

  // onDelete(id: string) {
  //   if (confirm("Esta seguro que desea eliminar este usuario?")) {
  //     this.firestore.doc('users/' + id).delete();
  //     this.toastr.warning('Usuario eliminado exitosamente','Registro Admin');
  //   }
  // }

}

