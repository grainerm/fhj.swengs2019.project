import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ActorFormComponent} from './actor-form/actor-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ActorListComponent} from './actor-list/actor-list.component';
import {JwtModule} from '@auth0/angular-jwt';
import {LoginComponent} from './login/login.component';
import {RatingModule} from 'ngx-bootstrap/rating';
import {NgxSelectModule} from 'ngx-select-ex';
import {BsDatepickerModule, ModalModule, SortableModule} from 'ngx-bootstrap';

import {defineLocale} from 'ngx-bootstrap/chronos';
import {deLocale} from 'ngx-bootstrap/locale';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BandViewComponent } from './band-view/band-view.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {ActivatedRoute, Router} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import {MapComponent} from './map/map.component';
import {BanduserFormComponent} from './banduser-form/banduser-form.component';
import {MediainputComponent} from './mediainput/mediainput.component';
import {FileUploadModule} from 'ng2-file-upload';
import {SafeUrlPipe} from './safe-url.pipe';
import {BanduserListComponent} from './banduser-list/banduser-list.component';
import {ShowHidePasswordModule} from 'ngx-show-hide-password';



defineLocale('de', deLocale);


export function tokenGetter() {
  return localStorage.getItem('access_token');
}


@NgModule({
  declarations: [
    AppComponent,
    ActorFormComponent,
    ActorListComponent,
    LoginComponent,
    BanduserListComponent,
    BanduserFormComponent,
    BandViewComponent,
    HomeComponent,
    EventsComponent,
    MediainputComponent,
    SafeUrlPipe,
    EventsComponent,
    MapComponent,
  ],
  imports: [
    ShowHidePasswordModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FileUploadModule,
    ModalModule.forRoot(),
    SortableModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:4200']
      }
    }),
    RatingModule.forRoot(),
    NgxSelectModule,
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],

  bootstrap: [AppComponent]
})
export class AppModule {

}
