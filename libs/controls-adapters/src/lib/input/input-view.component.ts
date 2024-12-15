import { Directive } from "@angular/core";
import { UntypedFormControl } from "@angular/forms";
import { MaskitoOptions } from "@maskito/core";

@Directive()
export abstract class InputViewComponent {
  control!: UntypedFormControl;
  label: string | undefined = undefined;
  placeholder: string = '';
  mask: MaskitoOptions | null = null;

  abstract refresh(): void;
}
