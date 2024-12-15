import { isControlInvalid } from './../utils/form-control.utils';
import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Pipe({
  name: 'isInvalid',
  pure: false,
  standalone: true
})
export class ControlValidatePipe implements PipeTransform {

  transform(control: AbstractControl<any>): any {
    return isControlInvalid(control);
  }
}
