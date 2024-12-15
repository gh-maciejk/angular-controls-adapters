import { getControl } from './../utils/form-control.utils';
import { Pipe, PipeTransform } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

@Pipe({
  name: 'controlValue',
  pure: false,
  standalone: true
})
export class ControlValuePipe implements PipeTransform {
  transform(group: UntypedFormGroup, controlName: string): any {
    return getControl(group, controlName)?.value;
  }
}
