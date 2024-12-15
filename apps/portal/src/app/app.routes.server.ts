import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Client,
  },
  {
    path: 'ssr',
    renderMode: RenderMode.Server,
  },
  {
    path: 'prerender',
    renderMode: RenderMode.Prerender,
  },
];
