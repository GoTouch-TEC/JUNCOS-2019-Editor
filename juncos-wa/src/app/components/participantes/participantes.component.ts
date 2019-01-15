import { Component, OnInit,Inject } from '@angular/core';
import {MatDialogModule,MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ParticipantInterface,displayedColumns as dc,storedColumns as sc} from '../../interfaces/ParticpantInterface'

@Component({
  selector: 'app-participantes',
  templateUrl: './participantes.component.html',
  styleUrls: ['./participantes.component.css']
})
export class ParticipantesComponent {
  storedColumns=sc;
  firstName: string;
  lastName: string;
  identification: string;
  studentCard: string;
  birthDate: string;
  email: string;
  list:string[];
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(participantesDialog, {
      width: '400px',
      height: '70%',
      data: {firstName: this.firstName,lastName: this.lastName,identification:this.identification,
        studentCard: this.studentCard,birthData: this.birthDate,email:this.email
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
      this.list = result;
    });

    //hay que agarrar list, validar los datos e insertarlos a la base de datos
  }

}

@Component({
  selector: 'participantes-dialog',
  templateUrl: './participantesDialog.html',
})
export class participantesDialog {

  constructor(
    public dialogRef: MatDialogRef<participantesDialog>,
    @Inject(MAT_DIALOG_DATA) public data: ParticipantInterface) {} 

  onNoClick(): void {
    this.dialogRef.close();
  }

}
