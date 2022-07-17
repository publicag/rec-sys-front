import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MoviesComponent } from './pages/movies/movies.component';
import { MovieDetailsComponent } from './pages/movies/movie-details/movie-details.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MovieCoverComponent } from './pages/movies/movie-cover/movie-cover.component';
import { TmdbHttpInterceptor } from './utils/interceptors/tmdb-http-interceptor';
import { MovieListComponent } from './pages/movies/movie-list/movie-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MovieContentDialogComponent } from './pages/movies/movie-conent-dialog/movie-conent-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterFormComponent } from './pages/forms/register-form/register-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './pages/forms/login-form/login-form.component';
import { NavigationBarComponent } from './pages/navigation-bar/navigation-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { JwtInterceptorService } from './utils/interceptors/jwt-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDetailsComponent,
    PageNotFoundComponent,
    MovieCoverComponent,
    MovieListComponent,
    MovieContentDialogComponent,
    RegisterFormComponent,
    LoginFormComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    NgxUsefulSwiperModule
  ],
  entryComponents: [
    MovieContentDialogComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TmdbHttpInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
