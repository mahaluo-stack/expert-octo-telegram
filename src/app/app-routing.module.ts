import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import * as Page from './core/components/pages';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'sign in'
  },
  {
    title: 'sign in',
    path: 'sign in',
    component: Page.SignInComponent
  },
  {
    title: 'home',
    path: 'home',
    component: Page.HomePageComponent,
    canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always',
  },
  {
    title: 'profile',
    path: 'profile',
    component: Page.ProfilePageComponent,
    canActivate: [AuthGuard],
    runGuardsAndResolvers: 'always',
  },
  {
    path: '404',
    component: Page.NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})

export class AppRoutingModule { 




}
