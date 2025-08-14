import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoudComponent } from './page-not-foud/page-not-foud.component';

import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { CoursesDetailComponent } from './courses-detail/courses-detail.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { ContacDetailsComponent } from './contac-details/contac-details.component';

// Principal
// Contact
// About

const routes: Routes = [
  {
    path: 'home', 
    component: HomeComponent
  },
  {
    path: 'courses', 
    component: CoursesComponent
  },
  {
    path: 'courses/:course', 
    component: CoursesDetailComponent
  },

  // contact/ nombreHija
  {
    path: 'contact',
    component: ContactComponent,
    children: [
      {
        path: '',
        component: ContactInfoComponent
      },
      {
        path: 'details',
        component: ContacDetailsComponent
      }
    ]
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**', 
    component: PageNotFoudComponent
  }
];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    PageNotFoudComponent,
    CoursesComponent,
    CoursesDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
