import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BikeService } from './services/bike.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';

import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { ViewBikeComponent } from './components/view-bike/view-bike.component';
import { CallbackComponent } from './components/callback/callback.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    ViewBikeComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatListModule
  ],
  providers: [
    BikeService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
