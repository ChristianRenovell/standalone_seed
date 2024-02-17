import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'test',
    pathMatch: 'full',
  },
  {
    path: 'test',
    loadComponent: () =>
      import('./components/test/test.component').then((x) => x.TestComponent),
  },
  {
    path: 'unauthorized',
    loadComponent: () =>
      import('./components/unauthorized/unauthorized.component').then(
        (x) => x.UnauthorizedComponent
      ),
  },
  {
    path: 'error',
    loadComponent: () =>
      import('./components/error/error.component').then(
        (x) => x.ErrorComponent
      ),
  },
];
