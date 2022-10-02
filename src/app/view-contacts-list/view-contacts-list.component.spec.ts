import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ContactService } from '../contact.service';
import { CONTACTS } from '../mocks/contacts.mock';

import { ViewContactsListComponent } from './view-contacts-list.component';

describe('ViewContactsListComponent', () => {
  let component: ViewContactsListComponent;
  let fixture: ComponentFixture<ViewContactsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [{provide: ContactService, useClass: MockContactService }],
      declarations: [ ViewContactsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewContactsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class MockContactService {
  getContacts() {
    return of(CONTACTS.results);
  }
}
