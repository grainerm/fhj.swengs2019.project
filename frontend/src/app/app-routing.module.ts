import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ActorFormComponent} from './actor-form/actor-form.component';
import {ActorListComponent} from './actor-list/actor-list.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth.guard';
import {MoviesResolver} from './resolver/movies.resolver';
import {ActorResolver} from './resolver/actor.resolver';
import {ActorListResolver} from './resolver/actor-list.resolver';
import {HomeComponent} from './home/home.component';
import {EventsComponent} from './events/events.component';
import {BandViewComponent} from './band-view/band-view.component';
import {BandResolver} from './resolver/band.resolver';
import {MapComponent} from './map/map.component';
import {BandListResolver} from './resolver/band-list.resolver';
import {CountriesResolver} from './resolver/countries.resolver';
import {BanduserListComponent} from './banduser-list/banduser-list.component';
import {BanduserFormComponent} from './banduser-form/banduser-form.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },

  {
    path: 'home', component: HomeComponent, resolve: {
      bands: BandListResolver
    }
  },
  {
    path: 'events', component: EventsComponent
  },
  {
    path: 'map', component: MapComponent, resolve: { countries: CountriesResolver}
  },
  {
    path: 'band-view/:id', component: BandViewComponent, resolve: {
      band: BandResolver
    }
  },
  /*{
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
  },*/
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'banduser-list', component: BanduserListComponent
  },
  {
    path: 'banduser-form', component: BanduserFormComponent
  },
  {
    path: 'banduser-form/:id', component: BanduserFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
