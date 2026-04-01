import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ServicesComponent } from './pages/services/services';
import { ContactComponent } from './pages/contact/contact';
import { AboutComponent } from './pages/about/about';

export const routes: Routes = [
  { path: '', component: HomeComponent },   // ✅ MUST HAVE
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },

  // ✅ VERY IMPORTANT (SSR FIX)
  { path: '**', redirectTo: '' }
];