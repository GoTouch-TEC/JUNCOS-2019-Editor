import { Injectable } from '@angular/core';
import { User } from './user.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  formData :User; 

  constructor(private firestore: AngularFirestore) { }

  getUsers() {
    return this.firestore.collection('users').snapshotChanges();
}
}
