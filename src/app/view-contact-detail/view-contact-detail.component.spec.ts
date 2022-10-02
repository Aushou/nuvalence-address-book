import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, of } from 'rxjs';
import { ContactService } from '../contact.service';
import { CONTACTS } from '../mocks/contacts.mock';

import { ViewContactDetailComponent } from './view-contact-detail.component';

describe('ViewContactDetailComponent', () => {
  let component: ViewContactDetailComponent;
  let fixture: ComponentFixture<ViewContactDetailComponent>;
  let mockContactService: any;
  
  beforeEach(async () => {
    mockContactService = jasmine.createSpyObj('ContactService', ['getContact']);

    await TestBed.configureTestingModule({
      providers: [
        { provide: ContactService, useValue: mockContactService },
        { provide: ActivatedRoute, useClass: MockRoute}
      ],
      declarations: [ ViewContactDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewContactDetailComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the user\'s name from getContact', () => {
    mockContactService.getContact.and.returnValue(of(CONTACTS.results[0]));
    fixture.detectChanges();

    const loadingElement = fixture.debugElement.query(By.css('h2')).nativeElement;
    expect(loadingElement.innerHTML).toContain('Stanimir');
  })

  it('should display a placeholder when there is no result yet', () => {
    mockContactService.getContact.and.returnValue(EMPTY);
    fixture.detectChanges();
    
    const loadingElement = fixture.debugElement.query(By.css('div')).nativeElement;
    expect(loadingElement.innerHTML).toContain('Loading');
  });
});

class MockRoute {
  snapshot = {
    paramMap: {
      get: (id: string) => '42'
    }
  }
}