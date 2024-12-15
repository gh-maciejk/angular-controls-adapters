import { getControl } from './../utils/form-control.utils';
import { Pipe, PipeTransform } from '@angular/core';
import { UntypedFormArray, UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Pipe({
  name: 'arrayControls',
  pure: false,
  standalone: true
})
export class ControlsArrayPipe implements PipeTransform {

  transform(group: UntypedFormGroup, controlName: string): UntypedFormControl[] {
    var formArray = getControl<UntypedFormArray>(group, controlName);
    return formArray.controls as UntypedFormControl[];
  }
}
