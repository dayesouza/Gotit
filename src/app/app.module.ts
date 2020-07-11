import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';

import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CoreModule } from './core/core.module';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { RoutesService } from './shared/routesService';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserComponent,
    NotFoundComponent,
    PageHeaderComponent,
    PageHeaderComponent,
  ],
  imports: [
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    CoreModule,
  ],
  providers: [RoutesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
