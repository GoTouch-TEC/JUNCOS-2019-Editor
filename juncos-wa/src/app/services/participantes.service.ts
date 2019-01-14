import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ParticipantInterface } from '../interfaces/ParticpantInterface';


@Injectable({
  providedIn: 'root'
})
export class ParticipantesService {

  formData :ParticipantInterface;

  constructor(private firestore: AngularFirestore){ }

  getParticipantes(){
   
    return this.firestore.collection('participantes').snapshotChanges();
  }
  
}
