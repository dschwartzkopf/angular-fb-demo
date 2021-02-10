// DEPENDENCIES
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// SECURITY
import { AuthGuard } from './security/auth.guard';

/**
 * WEB APP ROUTES
 */
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },

    /* START MY VIEWS */

    { path: 'cart', loadChildren: './pages/cart/cart.module#CartModule', canActivate: [AuthGuard] },
    { path: 'checkout', loadChildren: './pages/checkout/checkout.module#CheckoutModule', canActivate: [AuthGuard] },
    { path: 'home', loadChildren: './pages/home/home.module#HomeModule' },
    { path: 'subscriptions', loadChildren: './pages/plans &amp; pricing/plans &amp; pricing.module#Plans &amp; PricingModule' },
    { path: 'register', loadChildren: './pages/register/register.module#RegisterModule' },
    { path: 'login', loadChildren: './pages/sign-in/sign-in.module#Sign-InModule' },
    { path: 'products', loadChildren: './pages/product-list/product-list.module#ProductListModule' },

 /* END MY VIEWS */

    // SECURITY
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule' }
];

/**
 * ROUTING MODULE
 */
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
