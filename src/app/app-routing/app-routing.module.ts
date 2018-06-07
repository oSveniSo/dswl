import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from '../login/login.component'
import { HomeComponent } from '../home/home.component'
import { MerchComponent } from '../merch/merch.component'
import { GalleryComponent } from '../gallery/gallery.component'
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'merch', component: MerchComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
