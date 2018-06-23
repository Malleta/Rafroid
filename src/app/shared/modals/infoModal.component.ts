import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {Component} from '@angular/core';

@Component({
  selector: 'app-info-modal',
  template: `
    <div class="modal-header">
      <h4 class="modal-title pull-left">{{title}}</h4>
      <button type="button" class="close pull-right" aria-label="Close" (click)="bsModalRef.hide()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      {{description}}
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-default" (click)="bsModalRef.hide()">Zatvori</button>
    </div>`
})

export class InfoModalComponent {
  title: string;
  closeBtnName: string;
  description: string;

  constructor(public bsModalRef: BsModalRef) {
  }
}
