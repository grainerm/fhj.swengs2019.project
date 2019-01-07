import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ActorFormComponent} from './actor-form/actor-form.component';
import {ActorListComponent} from './actor-list/actor-list.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth.guard';
import {MoviesResolver} from './resolver/movies.resolver';
import {ActorResolver} from './resolver/actor.resolver';
import {ActorListResolver} from './resolver/actor-list.resolver';

const routes: Routes = [
  {
    path: '', redirectTo: '/actor-list', pathMatch: 'full'
  },
  {
    path: 'actor-form', component: ActorFormComponent, canActivate: [AuthGuard], resolve: {
      actor: ActorResolver,
      movies: MoviesResolver, }
  },
  {
    path: 'actor-form/:id', component: ActorFormComponent, canActivate: [AuthGuard], resolve: {
      actor: ActorResolver,
      movies: MoviesResolver, }
  },
  {
    path: 'actor-list', component: ActorListComponent, canActivate: [AuthGuard], resolve: {
      actors: ActorListResolver, }
  },
  {
    path: 'login', component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
