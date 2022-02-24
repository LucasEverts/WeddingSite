import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomePage } from './app.home';
import { WhenWhereComponent } from './subpages/when-where/when-where.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './subpages/home/home.component';
import { GuestRsvpComponent } from './subpages/guest-rsvp/guest-rsvp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomePage,
    WhenWhereComponent,
    HomeComponent,
    GuestRsvpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'home', component: HomeComponent},
      {path:'when-where', component: WhenWhereComponent},
      {path:'guest-rsvp', component:GuestRsvpComponent},
      {path:'', redirectTo: 'home', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [HomePage]
})
export class AppModule { }
