import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DataTableParticipantesItem } from '../interfaces/dataTableParticipantesitem';

@Injectable({
  providedIn: 'root'
})
export class ParticipantesService {

  formData :DataTableParticipantesItem;

  constructor(private firestore: AngularFirestore){ }

  getParticipantes(){
   
    return this.firestore.collection('participantes').snapshotChanges();
  }
  
}
