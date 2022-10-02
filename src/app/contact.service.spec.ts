import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ContactService } from './contact.service';
import { CONTACTS } from './mocks/contacts.mock';
import { ContactResponse } from './models/contact-response';

describe('ContactService', () => {
  let httpTestingController: HttpTestingController;
  let service: ContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ ContactService ]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ContactService);
  });

  afterEach(() => {
    httpTestingController.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Get Contacts', () => {
    it('should return an Observable of a list of contacts on success', () => {
      const mockContacts: ContactResponse = CONTACTS
      service.getContacts().subscribe(contacts => {
        expect(contacts.length).toBe(5);
        expect(contacts).toEqual(mockContacts.results)
      });
      const req = httpTestingController.expectOne('https://randomuser.me/api/?results=20&seed=nuvalence');
      expect(req.request.method).toBe('GET');
      req.flush(mockContacts);
    });

    it('should return an empty array on failure', () => {
      service.getContacts().subscribe(contacts => {
        expect(contacts.length).toBe(0);
      });
      const req = httpTestingController.expectOne('https://randomuser.me/api/?results=20&seed=nuvalence');
      req.flush('404 Not Found', { status: 404, statusText: 'Not Found' });
    })
  });

  describe('Get Contacts Paginated', () => {
    it('should return an Observable of a list of contacts on success', () => {
      const mockContacts: ContactResponse = CONTACTS
      service.getContactsPaginated(0, 5).subscribe(contacts => {
        expect(contacts.length).toBe(5);
        expect(contacts).toEqual(mockContacts.results)
      });
      const req = httpTestingController
        .expectOne('https://randomuser.me/api/?seed=nuvalence&page=1&results=5');
      expect(req.request.method).toBe('GET');
      req.flush(mockContacts);
    });

    it('should create the correct query params from the input params', () => {
      const mockContacts: ContactResponse = CONTACTS
      const givenPage = 3;
      const givenSize = 10;
      service.getContactsPaginated(givenPage, givenSize)
        .subscribe(contacts => {
          expect(contacts.length).toBe(5);
          expect(contacts).toEqual(mockContacts.results)
        });
      const req = httpTestingController
        .expectOne(`https://randomuser.me/api/?seed=nuvalence&page=${givenPage+1}&results=${givenSize}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockContacts);
    })

    it('should return an empty array on failure', () => {
      service.getContactsPaginated(0, 5).subscribe(contacts => {
        expect(contacts.length).toBe(0);
      });
      const req = httpTestingController
        .expectOne('https://randomuser.me/api/?seed=nuvalence&page=1&results=5');
      req.flush('404 Not Found', { status: 404, statusText: 'Not Found' });
    })
  });


  describe('Get Contact', () => {
    it('should return an Observable of a list of contacts on success', () => {
      const mockContacts: ContactResponse = CONTACTS
      service.getContact('535843832').subscribe(contact => {
        expect(contact).toBeDefined();
        expect(contact).toEqual(mockContacts.results[0])
      });
      const req = httpTestingController.expectOne('https://randomuser.me/api/?results=20&seed=nuvalence');
      expect(req.request.method).toBe('GET');
      req.flush(mockContacts);
    });
  });
});
