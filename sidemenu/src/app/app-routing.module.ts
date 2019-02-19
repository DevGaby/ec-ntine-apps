import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'signin',
    loadChildren: './signin/signin.module#SigninPageModule'
  },
  { path: 'signup',
    loadChildren: './signup/signup.module#SignupPageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'profil',
    loadChildren: './profil/profil.module#ProfilPageModule'
  },
  {
    path: 'shoppingcart',
    loadChildren: './shoppingcart/shoppingcart.module#ShoppingcartPageModule'
  },
  { path: 'management',
    loadChildren: './management/management.module#ManagementPageModule'
  },
  { path: 'signout',
    loadChildren: './signout/signout.module#SignoutPageModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
