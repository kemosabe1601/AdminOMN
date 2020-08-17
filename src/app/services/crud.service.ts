import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public fireservice: AngularFirestore) { }

  createHomeSet(homeData) {
    return this.fireservice.collection('home').add(homeData);
  }
}
