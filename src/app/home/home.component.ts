import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';
import { MenuModalComponent } from '../shared/menu-modal/menu-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  menuModalRef: BsModalRef;
  subscriptions: Subscription[] = [];

  constructor(
    private modalSvc: BsModalService
  ) { }

  ngOnInit(): void {
  }

  openModalWithComponent(): void {
    const modalClass = 'modal-dialog-top-left';

    const initialState = {
      title: 'TrakGud - Main Menu'
    };

    // Subscribe to the modal's events.
    this.subscriptions.push(
      this.modalSvc.onHidden.subscribe((reason: string) => {
        // this.appStateSvc.MenuVisible = false;

        const reasonDesc = reason ? `, dismissed by ${reason}` : '';
        console.log(`onHidden event has been fired${reasonDesc}`);
        // this.unsubscribeModalEvents();
      })
    );

    // Show the modal.
    this.menuModalRef = this.modalSvc.show(MenuModalComponent, {
      class: modalClass,
      initialState
    });
    this.menuModalRef.content.closeBtnName = 'Close';
  }
}
