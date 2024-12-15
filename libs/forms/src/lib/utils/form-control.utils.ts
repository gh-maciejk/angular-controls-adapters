import { AbstractControl, UntypedFormControl, UntypedFormGroup, ValidatorFn } from '@angular/forms';

const _integer = new Set(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
const _funtionalKeys = new Set(
  [
    'ArrowLeft',
    'ArrowRight',
    'ArrowUp',
    'ArrowDown',
    'Backspace',
    'Delete',
    'Home',
    'End',
    "Tab"
  ]
);

export const isControlInvalid = (control: AbstractControl<any>) => {
  if (!!!control || control.disabled)
    return false;

  if (!control.dirty && !control.touched)
    return false;

  return control.invalid;
}

export const getControl = <TControl extends AbstractControl>(group: UntypedFormGroup, controlName: string): TControl => {
  if (!controlName.includes('.')) {
    return group?.get(controlName) as TControl;
  }
  const parts = controlName.split('.');
  let ctrl: AbstractControl | null = group as AbstractControl;
  while (parts.length && ctrl) {
    const part = parts.shift();
    if (part) {
      ctrl = ctrl.get(part);
    }
  }
  return ctrl as TControl;
};

export const createFormControl = (
  state?: any,
  validators?: ValidatorFn | ValidatorFn[] | null,
  updateOn?: 'change' | 'blur' | 'submit'): UntypedFormControl => {
  return new UntypedFormControl(state, {
    validators: validators,
    updateOn: updateOn
  });
}

export const numberOnly = (event: any, decimal: boolean = false): boolean => {
  if (_integer.has(event.key)) { return true; }
  return decimal ? (event.key === '.' || event.key === ',') : false;
}

export const isFuncionalKey = (event: KeyboardEvent): boolean => {
  return _funtionalKeys.has(event.key);
}
