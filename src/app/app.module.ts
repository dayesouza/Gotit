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
import { RoutesService } from './shared/routesService';
import { AddQuicklyComponent } from './shared/components/add-quickly/add-quickly.component';
import { SharedModule } from './shared/shared.module';
import { LandingComponent } from './pages/landing/landing.component';
import { ItemsComponent } from './pages/items/items.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserComponent,
    NotFoundComponent,
    AddQuicklyComponent,
    LandingComponent,
    ItemsComponent,
  ],
  imports: [
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    CoreModule,
    SharedModule,
  ],
  providers: [RoutesService, NgbActiveModal],
  bootstrap: [AppComponent],
})
export class AppModule {}
