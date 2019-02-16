import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {

  MatTableModule,
  MatButtonModule,
  MatMenuModule,
  MatCheckboxModule,
  MatCardModule,
  MatGridListModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatListModule,
  MatIconModule,
  MatFormFieldModule,
  MatSidenavModule
} from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    DashboardComponent
  ],
  imports: [
    MatTableModule,
    MatButtonModule,
    FormsModule,
    MatMenuModule,
    MatCheckboxModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatDatepickerModule,

    MatNativeDateModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatTabsModule,

    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatSidenavModule,
    BrowserModule,
    RouterModule.forRoot([
    
      {
        path: '',
        component: LoginComponent
      },
     
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '**',
        component: PageNotFoundComponent
      }

    ]),
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
