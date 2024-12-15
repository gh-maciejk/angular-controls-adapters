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
import { SelectViewComponent } from './select-view.component';
import { SELECT_CONTROL_VIEW } from './select.tokens';
import { IControlItem } from './select-types';
import { ControlAdapter } from './../control-adapter';

@Component({
  selector: 'app-select',
  template: `<ng-template #container></ng-template>`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'app-select block w-full' },
})
export class SelectControlAdapter extends ControlAdapter<SelectViewComponent> {
  @Input({ required: true }) control!: UntypedFormControl;
  @Input() label: string | undefined = undefined;
  @Input() placeholder: string = '';
  @Input({ required: true }) items: IControlItem[] = [];

  @ViewChild('container', { read: ViewContainerRef, static: true })
  override _container!: ViewContainerRef;

  constructor(@Inject(SELECT_CONTROL_VIEW) viewComponent: Type<SelectViewComponent>) {
    super(viewComponent);
  }

  override afterViewCreated(): void {
    if (this._componentRef === undefined) {
      return;
    }

    this._componentRef.instance.control = this.control;
    this._componentRef.instance.label = this.label;
    this._componentRef.instance.placeholder = this.placeholder;
    this._componentRef.instance.items = this.items;
  }
}
