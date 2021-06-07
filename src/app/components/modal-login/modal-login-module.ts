import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalLoginComponent } from './modal-login.component';


@NgModule({
    imports: [CommonModule],
    declarations: [ModalLoginComponent],
    exports: [ModalLoginComponent]
})
export class ModalLoginModule { }