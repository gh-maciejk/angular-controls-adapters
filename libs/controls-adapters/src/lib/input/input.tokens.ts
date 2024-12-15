import { InjectionToken, Type } from "@angular/core";
import { InputViewComponent } from "./input-view.component";

export const INPUT_CONTROL_VIEW = new InjectionToken<Type<InputViewComponent>>(
  'input-control-view-token'
);
