import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactService } from '../contact.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-view-contacts-list',
  templateUrl: './view-contacts-list.component.html',
  styleUrls: ['./view-contacts-list.component.scss']
})
export class ViewContactsListComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private contactsService: ContactService) { }

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts(): void {
    this.contactsService.getContacts()
      .subscribe(contacts => this.contacts = contacts)
  }

}
