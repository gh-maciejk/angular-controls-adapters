import { InjectionToken, Type } from "@angular/core";
import { SelectViewComponent } from "./select-view.component";

export const SELECT_CONTROL_VIEW = new InjectionToken<Type<SelectViewComponent>>(
  'select-control-view-token'
);
