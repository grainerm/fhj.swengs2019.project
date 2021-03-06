import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth.guard';
import {HomeComponent} from './home/home.component';
import {EventsComponent} from './events/events.component';
import {BandViewComponent} from './band-view/band-view.component';
import {BandResolver} from './resolver/band.resolver';
import {MapComponent} from './map/map.component';
import {BandListResolver} from './resolver/band-list.resolver';
import {CountriesResolver} from './resolver/countries.resolver';
import {BanduserListComponent} from './banduser-list/banduser-list.component';
import {BanduserFormComponent} from './banduser-form/banduser-form.component';
import {CountriesEventsResolver} from './resolver/countries_for_events.resolver';
import {CountriesBandsResolver} from './resolver/countries_for_bands.resolver';
import {CountriesBandsAndEventsResolver} from './resolver/countries_for_bands_and_events.resolver';
import {AlbumResolver} from './resolver/album.resolver';

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
    path: 'map', component: MapComponent, resolve: {
      band_countries: CountriesBandsResolver,
      event_countries: CountriesEventsResolver,
      event_band_countries: CountriesBandsAndEventsResolver
    }
  },
  {
    path: 'band-view/:id', component: BandViewComponent, resolve: {
      band: BandResolver,
      albums: AlbumResolver,
      countries: CountriesResolver
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
