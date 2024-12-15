import { getControl } from './form-control.utils';
import { isDevMode } from '@angular/core';
import { AbstractControl, FormGroup, UntypedFormControl, UntypedFormGroup } from '@angular/forms';

export const validateFormGroup = (formGroup: UntypedFormGroup) => {
  formGroup.markAllAsTouched();
  Object.keys(formGroup.controls).forEach(field => {
    const control = formGroup.get(field);
    if (control instanceof UntypedFormControl) {
      validateFormControl(control);
    } else if (control instanceof UntypedFormGroup) {
      validateFormGroup(control);
    }
  });
  formGroup.updateValueAndValidity();
}

export const getNumberValue = (formGroup: UntypedFormGroup, field: string): number | null => {
  const control = formGroup.get(field);
  if (control instanceof AbstractControl) {
    const controlValue = control.value;
    return parseInt(controlValue);
  }
  return null;
}

export const validateFormControl = (formControl: AbstractControl<any>) => {
  if (formControl) {
    formControl.setValue(formControl.value, {
      onlySelf: true,
      emitViewToModelChange: true,
    });
  }
}

export const debugFormGroup = (formGroup: UntypedFormGroup): void => {
  if (isDevMode()) {
    console.log('#### BEGIN DEBUG FORM GROUP ####');
    for (const [controlName, control] of Object.entries(formGroup.controls)) {
      debugFormControl(control, controlName);
    }
    console.log('#### END DEBUG FORM GROUP ####');
  }
}

export const debugFormControl = (formControl: AbstractControl, controlName: string | null = null): void => {
  if (isDevMode() && formControl) {
    if (controlName) {
      console.log(`---- ${controlName} ----`);
    }
    console.log('value: ', formControl.value);
    console.log(`valid: ${formControl.valid}`);
    console.log('errors: ', formControl.errors);
    console.log('control: ', formControl);
  }
}

export const fillGroupForm = <TForm extends any>(group: FormGroup, form: TForm | undefined) => {
  if (!!group && !!form) {
    const properties = Object.keys(form);

    for (let propertyIndex = 0; propertyIndex < properties.length; propertyIndex++) {
      const property: string = properties[propertyIndex];
      const control = getControl(group, property);
      if (!!control) {
        control.setValue((form as any)[property]);
      }
    }
  }
}
