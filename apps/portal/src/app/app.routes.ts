import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@apps/calc-form').then((x) => x.CALC_FORM_ROUTES),
  },
  {
    path: 'ssr',
    loadChildren: () =>
      import('@apps/calc-form').then((x) => x.CALC_FORM_ROUTES),
  },
  {
    path: 'prerender',
    loadChildren: () =>
      import('@apps/calc-form').then((x) => x.CALC_FORM_ROUTES),
  },
];
