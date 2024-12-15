import { numberOnly } from './form-control.utils';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class NumberValidator {

  public static integer(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!!value) {
        if (!numberOnly(value)) {
          return { integer: { value } };
        }

        if (value.length > 1 && parseInt(value[0]) === 0) {
          return { integer: { value } };
        }
      }
      return null;
    };
  }
}

export class BooleanValidator {

  public static boolean(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!!value) {
        const isBoolean = typeof value == "boolean";
        if (!isBoolean) {
          return { boolean: { value } };
        }
      }
      return null;
    };
  }
}
