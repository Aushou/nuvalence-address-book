import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ContactService } from '../contact.service';
import { CONTACTS } from '../mocks/contacts.mock';

import { ViewContactDetailComponent } from './view-contact-detail.component';

describe('ViewContactDetailComponent', () => {
  let component: ViewContactDetailComponent;
  let fixture: ComponentFixture<ViewContactDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        { provide: ContactService, useClass: MockContactService },
        { provide: ActivatedRoute, useClass: MockRoute}
      ],
      declarations: [ ViewContactDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewContactDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class MockContactService {
  getContact(id: string) {
    return of(CONTACTS.results[0]);
  }
}

class MockRoute {
  snapshot = {
    paramMap: {
      get: (id: string) => '42'
    }
  }
}