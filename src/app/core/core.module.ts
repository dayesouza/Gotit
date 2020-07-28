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
import { FooterComponent } from './components/footer/footer.component';
import { LoadingService } from './services/loading/loading.service';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';

@NgModule({
  imports: [
    NgBootstrapModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    RouterModule,
    HttpClientModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
    }),
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.chasingDots,
      primaryColour: '#17c671',
      secondaryColour: 'black',
    }),
  ],
  declarations: [NavbarComponent, FooterComponent],
  exports: [
    NgBootstrapModule,
    BrowserModule,
    BrowserAnimationsModule,
    NavbarComponent,
    RouterModule,
    HttpClientModule,
    FooterComponent,
    ToastrModule,
    NgxLoadingModule,
  ],
  providers: [AuthService, AngularFireAuthGuard, LoadingService],
})
export class CoreModule {}
