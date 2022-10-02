import { Location } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';

import { ToolbarComponent } from './toolbar.component';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let mockRouter: Router;
  let mockLocation: Location;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarComponent ],
      imports: [MatToolbarModule, MatIconModule],
      providers: [
        { provider: Location, useClass: MockLocation },
        { provider: Router, useClass: MockRouter }
      ]
    })
    .compileComponents();

    mockRouter = TestBed.inject(Router);
    mockLocation = TestBed.inject(Location);
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call goBack when the arrow is clicked', () => {
    const spy = spyOn(component, 'goBack');
    const button = fixture.debugElement.nativeElement.querySelector('mat-icon');
    button.click();

    fixture.whenStable().then(() => {
      expect(spy).toHaveBeenCalled();
    })
  });

  it('should call location.back when goBack is called', () => {
    const spy = spyOn(mockLocation, 'back');
    component.goBack();

    fixture.whenStable().then(() => {
      expect(spy).toHaveBeenCalled();
    })
  })
});

class MockLocation {
  back(){}
}

class MockRouter {  
  routerState = {
    snapshot: {
      url: '/contacts'
    }
  }

  setUrl(newUrl: string) {
    this.routerState.snapshot.url = newUrl;
  }
}