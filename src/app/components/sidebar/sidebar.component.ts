import { Component, OnInit } from '@angular/core';
import { User } from 'app/_models';
import { AccountService } from 'app/_services';
import { first } from 'rxjs/operators';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/orcamento', title: 'Novo Orçamento', icon: 'description', class: '' },
  { path: '/dashboard', title: 'Estatísticas', icon: 'dashboard', class: '' },
  { path: '/user-profile', title: 'Perfil', icon: 'person', class: '' },
  //{ path: '/table-list', title: 'Table List', icon: 'content_paste', class: '' },
  //{ path: '/typography', title: 'Typography', icon: 'library_books', class: '' },
  //{ path: '/icons', title: 'Icons', icon: 'bubble_chart', class: '' },
  //{ path: '/maps', title: 'Maps', icon: 'location_on', class: '' },
  { path: '/notifications', title: 'Notificações', icon: 'notifications', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  //user: User;
  
  user = JSON.parse(localStorage.getItem('user'));
  nome = this.user.nome;


   //notification
   orcamentos = [];
   total = 0;


  constructor(private accountService: AccountService) {
    this.accountService.user.subscribe(x => this.user = x);
  }

  ngOnInit() {

    this.listOrcs(this.user.id);

    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };

  logout() {
    this.accountService.logout();

  }

  //LIST PENDING ORCS
  listOrcs(idUser: string) {
    this.accountService.getPendingOrcs(idUser)
      .pipe(first())
      .subscribe(x => {

        this.orcamentos = x['orcamentos'];
        this.total = x['totalElements'];

      });
  }
}
