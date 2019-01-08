import { AbstractControl, ValidationErrors } from "@angular/forms";

export class SearchValidators {
  static alphabetsCheck(control: AbstractControl): ValidationErrors | null {
    const val = control.value;
    if (/^([a-zA-Z]+)$/.test(val)) {
      if (val.length > 1)
        return {
          alphabetsCheck: {
            check: true,
            message: "only one letter of alphabet is allowed."
          }
        };
      else return null;
    } else if (/^([0-9]+)$/.test(val)) {
      if (val.length > 6)
        return {
          alphabetsCheck: {
            check: true,
            message: "digits only up to 6 charector long."
          }
        };
      else return null;
    } else if (/^([a-zA-Z0-9]+)$/.test(val)) {
      return {
        alphabetsCheck: {
          check: true,
          message: "only one alphabet or digits up to 6 charector allowed."
        }
      };
    }
    return null;
  }
}
