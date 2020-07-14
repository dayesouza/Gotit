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
import { ItemService } from './shared/services/item/item.service';
import { LandingComponent } from './pages/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserComponent,
    NotFoundComponent,
    AddQuicklyComponent,
    LandingComponent,
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
  providers: [RoutesService, ItemService],
  bootstrap: [AppComponent],
})
export class AppModule {}
