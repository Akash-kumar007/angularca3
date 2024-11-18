import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { TollywoodComponent } from './tollywood/tollywood.component';
import { BollywoodComponent } from './bollywood/bollywood.component';
import { HollywoodComponent } from './hollywood/hollywood.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [

  {
    path: '', component: HomeComponent,
  },
  {
    path: 'login', component: LoginComponent
  }, 
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'hollywood', component: HollywoodComponent
  },
  {
    path: 'bollywood', component: BollywoodComponent
  },
  {
    path: 'tollywood', component: TollywoodComponent
  },
  {
    path: 'contact', component: ContactComponent
  }
];
