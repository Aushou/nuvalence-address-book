import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  constructor(private router: Router, private location: Location) { }

  goBack(): void {
    this.location.back();
  }

  isOnDetail(): boolean {
    const routerState = this.router.routerState;
    return routerState.snapshot.url !== '/contacts';
  }

}
