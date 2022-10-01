import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewContactDetailComponent } from './view-contact-detail.component';

describe('ViewContactDetailComponent', () => {
  let component: ViewContactDetailComponent;
  let fixture: ComponentFixture<ViewContactDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
