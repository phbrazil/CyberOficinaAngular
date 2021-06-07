import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './_models';
import { AccountService } from './_services';
import { ModalService } from './_services/modal-actions.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  user: User;
  modalTitle: string;

  constructor(private modalService: ModalService, private router: Router,
    private accountService: AccountService) { 
      this.accountService.user.subscribe(x => this.user = x);

  }


  openModal(id: string, modalTitle: string) {

    this.modalTitle = modalTitle;

    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
