import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { INPUT_CONTROL_VIEW, SELECT_CONTROL_VIEW } from '@libs/controls-adapters';
import { MaterialInputComponent } from '@materials/input';
import { MaterialSelectComponent } from '@materials/select';

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(withEventReplay()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideAnimationsAsync(),
    {
      provide: INPUT_CONTROL_VIEW,
      useValue: MaterialInputComponent,
    },
    {
      provide: SELECT_CONTROL_VIEW,
      useValue: MaterialSelectComponent
    }
  ],
};
