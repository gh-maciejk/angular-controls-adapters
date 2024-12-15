import { Directive } from "@angular/core";
import { UntypedFormControl } from "@angular/forms";
import { IControlItem } from "./select-types";

@Directive()
export abstract class SelectViewComponent {
  control!: UntypedFormControl;
  label: string | undefined = undefined;
  placeholder: string = '';
  items: IControlItem[] = [];
}
