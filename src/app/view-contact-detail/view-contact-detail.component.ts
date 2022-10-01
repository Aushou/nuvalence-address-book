import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../contact.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-view-contact-detail',
  templateUrl: './view-contact-detail.component.html',
  styleUrls: ['./view-contact-detail.component.scss']
})
export class ViewContactDetailComponent implements OnInit {
  @Input() contact?: Contact;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getContact();
  }

  getContact(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.contactService.getContact(id)
      .subscribe(contact => this.contact = contact)
  }

}
