import {Routes, RouterModule,  Router} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from './../environments/environment';
import { AppComponent } from './app.component';
import { RuntimeContentComponent } from './components/runtime-content.component';
import { WikiComponent } from './pages/wiki/wiki.component';
import { SharedModule } from './shared.module';

export const AppRoutes: Routes = [
  { path: 'wiki', component: WikiComponent },
  { path: '**', component: WikiComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    WikiComponent,
   // JsonComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
