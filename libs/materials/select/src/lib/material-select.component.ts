import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SelectViewComponent } from '@libs/controls-adapters';

@Component({
  selector: 'app-material-select',
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule
  ],
  standalone: true,
  templateUrl: './material-select.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'app-select flex flex-col gap-3 [&_*]:!text-sm'
  },
})
export class MaterialSelectComponent extends SelectViewComponent {}
