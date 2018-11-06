import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpComponent } from './help/help.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuardService } from './services/auth-guard.service';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    canActivate: [AuthGuardService],
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'help',
    component:HelpComponent
  },
  {
    path: 'profile',
    component:ProfileComponent
  },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },

  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'browse', loadChildren: './pages/browse/browse.module#BrowsePageModule' },
  { path: 'post', loadChildren: './pages/post/post.module#PostPageModule' },
  { path: 'main', loadChildren: './pages/main/main.module#MainPageModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
