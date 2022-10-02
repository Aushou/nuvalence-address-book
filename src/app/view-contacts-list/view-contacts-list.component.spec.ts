import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EMPTY, of } from 'rxjs';
import { ContactService } from '../contact.service';
import { CONTACTS } from '../mocks/contacts.mock';

import { ViewContactsListComponent } from './view-contacts-list.component';

describe('ViewContactsListComponent', () => {
  let component: ViewContactsListComponent;
  let fixture: ComponentFixture<ViewContactsListComponent>;
  let mockContactService: any;

  beforeEach(async () => {
    mockContactService = jasmine.createSpyObj('ContactService', ['getContactsPaginated']);

    await TestBed.configureTestingModule({
      providers: [{provide: ContactService, useValue: mockContactService }],
      declarations: [ ViewContactsListComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewContactsListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a list of contacts for each result from contactsService', () => {
    mockContactService.getContactsPaginated.and.returnValue(of(CONTACTS.results));
    fixture.detectChanges();
    const contactElements = fixture.debugElement.queryAll(By.css('mat-list-item'));
    expect(contactElements.length).toBe(5);
  });

  it('should display a placeholder when there is no result yet', () => {
    mockContactService.getContactsPaginated.and.returnValue(EMPTY);
    fixture.detectChanges();
    const loadingElement = fixture.debugElement.query(By.css('mat-spinner')).nativeElement;
    expect(loadingElement).toBeDefined();
  });
});