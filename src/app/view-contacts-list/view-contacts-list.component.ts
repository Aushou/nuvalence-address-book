import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { ContactService } from '../contact.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-view-contacts-list',
  templateUrl: './view-contacts-list.component.html',
  styleUrls: ['./view-contacts-list.component.scss']
})
export class ViewContactsListComponent implements OnInit {
  contacts$?: Observable<Contact[]>;
  paginatorSettings: PageEvent = {
    pageSize: 10,
    pageIndex: 0,
    length: 100
  };

  constructor(private contactsService: ContactService) {}

  ngOnInit(): void {
    this.contacts$ = this.contactsService.getContactsPaginated(
      this.paginatorSettings.pageIndex,
      this.paginatorSettings.pageSize);
  }

  onPageEvent(event: PageEvent) {
    this.paginatorSettings = event;
    this.contacts$ = this.contactsService.getContactsPaginated(event.pageIndex, event.pageSize);
  }

}
