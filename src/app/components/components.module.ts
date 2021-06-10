import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AlertComponent } from './alert/alert.component';
import { ModalLoginComponent } from './modal-login/modal-login.component';
import { AboutComponent } from './about/about.component';
import { NavbarLoginComponent } from './navbar-login/navbar-login.component';
import { NavDrawerComponent } from './nav-drawer/nav-drawer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    AboutComponent,
    NavDrawerComponent,
    //NavbarLoginComponent,
    //ModalLoginComponent,
    //AlertComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    NavDrawerComponent
  ]
})
export class ComponentsModule { }
