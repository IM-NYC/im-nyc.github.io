import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'WDS Agency - Websites for Small Businesses' },
  { path: 'services', component: ServicesComponent, title: 'Services | WDS Agency' },
  { path: 'about', component: AboutComponent, title: 'About Us | WDS Agency' },
  { path: 'contact', component: ContactComponent, title: 'Contact | WDS Agency' },
  { path: '**', redirectTo: '' },
];

