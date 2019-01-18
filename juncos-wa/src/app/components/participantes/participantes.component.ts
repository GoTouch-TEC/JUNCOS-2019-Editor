import { Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {displayedColumns as dc,storedColumns as sc} from '../../interfaces/ParticpantInterface'
import{dialogForm} from '../dialogs/dialogForm'

@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.component.html',
  styleUrls: ['./participantes.component.css']
})
export class ParticipantesComponent {
  storedColumns=sc;
  displayedColumns=dc;
  
  list:string[];

  constructor(public dialog: MatDialog) {
    
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(dialogForm, {
      width: '400px',
      height: '70%',
      data: {displayedColumns: this.displayedColumns,storedColumns: this.storedColumns}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
      this.list = result;
      //hay que agarrar list, validar los datos e insertarlos a la base de datos
    });

  }
}



