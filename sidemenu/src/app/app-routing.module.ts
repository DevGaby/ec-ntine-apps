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
    path: 'profil',
    loadChildren: './profil/profil.module#ProfilPageModule'
  },
  {
    path: 'shoppingcart',
    loadChildren: './shoppingcart/shoppingcart.module#ShoppingcartPageModule'
  },
  {
    path: 'management',
    loadChildren: './management/management.module#ManagementPageModule'
  },
  {
    path: 'signout',
    loadChildren: './signout/signout.module#SignoutPageModule'
  },
  {
    path: 'managementfund',
    loadChildren: './management/cantiniere/managementfund/managementfund.module#ManagementfundPageModule'
  },
  {
    path: 'managementcommand',
    loadChildren: './management/cantiniere/managementcommand/managementcommand.module#ManagementcommandPageModule'
  },
  {
    path: 'createarticle',
    loadChildren: './management/article/createarticle/createarticle.module#CreatearticlePageModule'
  },
  {
    path: 'deletearticle/:id',
    loadChildren: './management/article/deletearticle/deletearticle.module#DeletearticlePageModule'
  },
  {
    path: 'editarticle/:id',
    loadChildren: './management/article/editarticle/editarticle.module#EditarticlePageModule'
  },
  {
    path: 'detailarticle/:id',
    loadChildren: './management/article/detailarticle/detailarticle.module#DetailarticlePageModule'
  },
  {
    path: 'list',
    loadChildren: './management/article/list/list.module#ListPageModule'
  },
  {
    path: 'createmenu',
    loadChildren: './management/menu/createmenu/createmenu.module#CreatemenuPageModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
