import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
        pathMatch: 'full',
        //redirectTo: 'coming-soon'
    },
    /*{
        path: 'coming-soon',
        loadComponent: () => import('./pages/home-alt/home-alt.component').then((m) => m.HomeAltComponent),
    }*/
    {
        path: 'product/:link',
        loadComponent: () => import('./pages/product-detail/product-detail.component').then((m) => m.ProductDetailComponent),
    }
];
