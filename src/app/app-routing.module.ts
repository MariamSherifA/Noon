import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './Compnents/pages/profile/profile.component';
import { HomeComponent } from './Compnents/pages/home/home.component';
import { NotFoundComponent } from './Compnents/pages/not-found/not-found.component';
import { Cart2Component } from './Compnents/pages/cart2/cart2.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Profile', component: ProfileComponent },
  { path: 'Profile/:pId', component: ProfileComponent },
  {path: 'cart2',component: Cart2Component},
  { path: '**', component: NotFoundComponent },

import { AllproductsComponent } from './Compnents/allproducts/allproducts.component';
import { ProductsdetailsComponent } from './Compnents/productsdetails/productsdetails.component';

const routes: Routes = [
  {path:'allproducts',component:AllproductsComponent},
  {path:'productsdetails/:productid',component:ProductsdetailsComponent},
  {path:'**',redirectTo:'allproducts',pathMatch:'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
