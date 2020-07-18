import { NgModule } from '@angular/core';
import { NgBootstrapModule } from './ng-bootstrap.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './security/authService';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    NgBootstrapModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    RouterModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  declarations: [NavbarComponent],
  exports: [
    NgBootstrapModule,
    BrowserModule,
    BrowserAnimationsModule,
    NavbarComponent,
    RouterModule,
    HttpClientModule,
    ToastrModule,
  ],
  providers: [AuthService, AngularFireAuthGuard],
})
export class CoreModule {}
