import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
	providedIn: 'root',
})
export class AccessService {
	constructor(private fireStore: AngularFirestore) {}

	getDept() {
		return this.fireStore.collection('dept').snapshotChanges();
	}

	getTeam() {
		return this.fireStore.collection('team').snapshotChanges();
	}

	getEmploy() {
		return this.fireStore.collection('employ-type').snapshotChanges();
	}

	getAccessible() {
		return this.fireStore.collection('accesible-menu').snapshotChanges();
	}
}
