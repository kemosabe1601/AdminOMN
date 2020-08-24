import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
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
    return this.fireStore.collection("home").snapshotChanges();
  }

  getCategoryDataFireBase() {
    return this.fireStore.collection("category").snapshotChanges();
  }

  getListDataFireBase() {
    return this.fireStore.collection("list").snapshotChanges();
  }

  getUploadDataFireBase() {
    return this.fireStore.collection("upload").snapshotChanges();
  }

  getChallengerDataFireBase() {
    return this.fireStore.collection("challenger").snapshotChanges();
  }

  getDeletedRequestDataFireBase() {
    return this.fireStore.collection("deleted-request").snapshotChanges();
  }

  getViewingFeePerMinDataFireBase() {
    return this.fireStore.collection("viewingfeepermin").snapshotChanges();
  }

  getPaymentRequestDataFireBase() {
    return this.fireStore.collection("payment-request").snapshotChanges();
  }

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

  getUserData() {
    const header = new HttpHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    });
    return this.http.get("/api/v1/admin/user", {
      headers: header,
    });
  }
}
