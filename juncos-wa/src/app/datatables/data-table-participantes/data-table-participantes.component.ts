import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DataTableParticipantesDataSource } from './data-table-participantes-datasource';
import { ParticipantesService } from '../../services/participantes.service'
import { Participante } from 'src/app/objects/participante.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-data-table-participantes',
  templateUrl: './data-table-participantes.component.html',
  styleUrls: ['./data-table-participantes.component.css']
})
export class DataTableParticipantesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: DataTableParticipantesDataSource;

  list: Participante[];
  constructor(private service: ParticipantesService,
    private firestore: AngularFirestore,
    private toastr:ToastrService) { }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.service.getUsers().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          email: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Participante;
      })
    });
  }

  onEdit(admin: Participante) {
    this.service.formData = Object.assign({}, admin);
  }

  onDelete(id: string) {
    if (confirm("Esta seguro que desea eliminar este usuario?")) {
      this.firestore.doc('users/' + id).delete();
      this.toastr.warning('Usuario eliminado exitosamente','Registro Admin');
    }
  }
}
