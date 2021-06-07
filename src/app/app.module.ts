import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AlertComponent } from './components/alert';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ModalLoginModule } from './components/modal-login/modal-login-module';
import { LoginComponent } from './account/login.component';
import { AccountModule } from './account/account.module';
import { RegisterComponent } from './account/register.component';
import { NavbarLoginComponent } from './components/navbar-login/navbar-login.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
    ModalLoginModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBo5g3bCuE-_XSzmz6_7RC-R8d9YgkHILA'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AlertComponent,
    RegisterComponent,
    NavbarLoginComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
