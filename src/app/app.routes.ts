import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    { path: '', pathMatch: 'full', redirectTo: 'print'},
    { path: 'print', loadChildren: () => import('./tasks/task.routes').then(routes => routes.taskRoutes)}
];
