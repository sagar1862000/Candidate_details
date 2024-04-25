import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ExperienceComponent } from './experience/experience.component';

// const routes: Routes = [
//   { path: '', loadChildren: () => import('./authenticated/authenticated.module').then(m => m.AuthenticatedModule) },
//   { path: 'login', loadChildren: () => import('./non-authenticated/non-authenticated.module').then(m => m.NonAuthenticatedModule) },
//   { path: 'api', loadChildren: () => import('./non-authenticated/non-authenticated.module').then(m => m.NonAuthenticatedModule) },
//   { path: 'logout', component: LogoutComponent },
// ];

const routes: Routes = [
  { path : 'header' , component:HeaderComponent },
  { path : 'Experience' , component:ExperienceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
