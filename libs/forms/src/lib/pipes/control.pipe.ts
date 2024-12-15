import { getControl } from './../utils/form-control.utils';
import { Pipe, PipeTransform } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Pipe({
  name: 'control',
  pure: false,
  standalone: true
})
export class ControlPipe implements PipeTransform {
  transform(group: UntypedFormGroup, controlName: string): UntypedFormControl {
    return getControl(group, controlName);
  }
}
