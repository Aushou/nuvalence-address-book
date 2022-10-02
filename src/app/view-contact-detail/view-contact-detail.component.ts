import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactService } from '../contact.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-view-contact-detail',
  templateUrl: './view-contact-detail.component.html',
  styleUrls: ['./view-contact-detail.component.scss']
})
export class ViewContactDetailComponent implements OnInit {
  @Input() contact$?: Observable<Contact|undefined>;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
  ) { }

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.contact$ = this.contactService.getContact(id);
  }
}
