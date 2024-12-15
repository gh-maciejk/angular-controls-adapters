import {
  ChangeDetectionStrategy,
  Component,
  inject,
  ViewEncapsulation,
} from '@angular/core';
import {
  FormControl,
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
import { ControlPipe, validateFormGroup } from '@libs/forms';
import { MaskitoOptions } from '@maskito/core';
import { maskitoWithPlaceholder } from '@maskito/kit';
import { IControlItem, InputControlAdapter, SelectControlAdapter } from '@libs/controls-adapters';

@Component({
  selector: 'app-calc-form',
  imports: [
    SelectControlAdapter,
    ReactiveFormsModule,
    ControlPipe,
    InputControlAdapter
  ],
  templateUrl: './calc-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'flex flex-col w-full h-full place-content-start items-center gap-6',
  },
})
export class CalcFormComponent {
  fb: UntypedFormBuilder = inject(UntypedFormBuilder);
  form = this.fb.group({
    brand: [null, [Validators.required]],
    model: [null, [Validators.required]],
    zipCode: [
      null,
      [Validators.required, Validators.pattern(/^[0-9]{2}-[0-9]{3}$/)],
    ],
    firstName: [null, [Validators.required]],
    secondName: [null, [Validators.required]],
  });

  zipCodeMask: MaskitoOptions = {
    ...maskitoWithPlaceholder('__-___'),
    mask: [/\d/, /\d/, '-', /\d/, /\d/, /\d/],
  };

  showPrice: boolean = false;
  brandsControl: FormControl<number> = new FormControl();
  brands: IControlItem[] = [
    {
      text: 'Marka 1',
      value: 1,
    },
    {
      text: 'Marka 2',
      value: 2,
    },
    {
      text: 'Marka 3',
      value: 3,
    },
  ];

  models: IControlItem[] = [
    {
      text: 'Model 1',
      value: 1,
    },
    {
      text: 'Model 2',
      value: 2,
    },
    {
      text: 'Model 3',
      value: 3,
    },
  ];

  saveForm() {
    validateFormGroup(this.form);
    if (this.form.valid) {
      this.showPrice = true;
    }
  }
}
