import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import 'hammerjs';

import { TmdbService } from "./tmdb.service";
import { ServerAuthService } from "./server-auth.service";

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { CardComponent } from "./card/card.component";
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { AbcComponent } from './abc/abc.component';
import { ActorComponent } from './actor/actor.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    CardComponent,
    MovieDetailsComponent,
    AbcComponent,
    ActorComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MatCardModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'movie',
        component: MoviesComponent
      },
      {
        path: 'movie/:id',
        component: MovieDetailsComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ])
  ],
  entryComponents: [
    AbcComponent
  ],
  providers: [TmdbService, ServerAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
