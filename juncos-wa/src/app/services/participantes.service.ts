import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Participante } from '../objects/participante.model';

@Injectable({
  providedIn: 'root'
})
export class ParticipantesService {

  formData :Participante;

  constructor(private firestore: AngularFirestore){ }

  getUsers(){
    return this.firestore.collection('participantes').snapshotChanges();
  }
}
