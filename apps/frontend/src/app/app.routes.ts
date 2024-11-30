import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'ponentes',
        loadComponent: () =>
            import('@gdgweb/ponentes').then((m) => m.PonentesComponent), 
    }

];
