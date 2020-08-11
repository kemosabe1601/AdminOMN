import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: "root",
})
export class MockApiService {
  constructor(public http: HttpClient, public fireStore: AngularFirestore) {}

  getBaseUrl() {
    return "http://113.172.60.152:3000/";
  }

  getHomeData() {
    const header = new HttpHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    });
    return this.http.get("/api/v1/admin/home", {
      headers: header,
    });
  }

  getHomeDataFireBase() {
    return this.fireStore.collection('home').snapshotChanges();
    // return this.fireStore.collection('home', ref => ref.where('air_mon', '==', true)
    //                                 .where('air_tue', '==', true)
    //                                 .where('air_wed', '==', true)
    //                                 .where('air_thurs', '==', true)
    //                                 .where('air_fri', '==', true)
    //                                 .where('air_sat', '==', true)
    //                                 .where('air_sun', '==', true)).snapshotChanges();
  }

  // getAiringDaysInHome(id: string) {
	// 	return this.fireStore.collection('home').doc(id).collection('airing_days').snapshotChanges();
  // }

  getTableData() {
    const header = new HttpHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    });
    return this.http.get("/api/v1/admin/table", {
      headers: header,
    });
  }

  getUploadData() {
    const header = new HttpHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    });
    return this.http.get("/api/v1/admin/upload", {
      headers: header,
    });
  }

  getTransactionData() {
    const header = new HttpHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    });
    return this.http.get("/api/v1/admin/transactions", {
      headers: header,
    });
  }
}
