import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MaskitoDirective } from '@maskito/angular';
import { InputViewComponent } from '@libs/controls-adapters';

@Component({
  selector: 'app-material-input',
  imports: [
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MaskitoDirective,
  ],
  templateUrl: './material-input.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'app-input flex flex-col gap-3 [&_*]:!text-sm',
  },
})
export class MaterialInputComponent extends InputViewComponent {
  override refresh(): void {}
}
