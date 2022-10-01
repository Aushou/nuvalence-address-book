import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewContactsListComponent } from './view-contacts-list.component';

describe('ViewContactsListComponent', () => {
  let component: ViewContactsListComponent;
  let fixture: ComponentFixture<ViewContactsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
