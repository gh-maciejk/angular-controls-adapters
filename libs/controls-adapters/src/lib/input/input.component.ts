import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input,
  Type,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { InputViewComponent } from './input-view.component';
import { INPUT_CONTROL_VIEW } from './input.tokens';
import { MaskitoOptions } from '@maskito/core';
import { ControlAdapter } from '../control-adapter';

@Component({
  selector: 'app-input',
  template: `<ng-template #container></ng-template>`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'app-input block flex-full' },
})
export class InputControlAdapter extends ControlAdapter<InputViewComponent> {
  @Input({ required: true }) control!: UntypedFormControl;
  @Input() label: string | undefined = undefined;
  @Input() placeholder: string = '';
  @Input() mask: MaskitoOptions | null = null;

  @ViewChild('container', { read: ViewContainerRef, static: true })
  override _container!: ViewContainerRef;

  constructor(@Inject(INPUT_CONTROL_VIEW) viewComponent: Type<InputViewComponent>) {
    super(viewComponent);
  }

  override afterViewCreated(): void {
    if (this._componentRef === undefined) { return; }

    this._componentRef.instance.control = this.control;
    this._componentRef.instance.label = this.label;
    this._componentRef.instance.placeholder = this.placeholder;
    this._componentRef.instance.mask = this.mask;
  }
}
