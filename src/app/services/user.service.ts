import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor() {}

  form: FormGroup = new FormGroup({
    name: new FormControl(""),
    id: new FormControl(""),
  });

  initializeFormGroup() {
    this.form.setValue({
      name: "",
      id: "",
    });
  }
}
