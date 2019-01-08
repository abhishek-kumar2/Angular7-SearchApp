import { SearchValidators } from "./search.validators";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  form = new FormGroup({
    appSearch: new FormControl("", [
      //Validators.minLength(3),
      //Validators.maxLength(10),
      //Validators.pattern("^[a-zA-Z]{1}$|^[0-9]{6}$")
      SearchValidators.alphabetsCheck
    ])
  });

  get appSearch() {
    return this.form.get("appSearch");
  }

  onKeyUp() {
    console.log("on key up");
    console.log(this.form.get("appSearch"));
  }
}
