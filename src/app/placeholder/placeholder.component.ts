import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.scss']
})
export class PlaceholderComponent implements OnInit {
  title = 'nuvalence-address-book';

  constructor() { }

  ngOnInit(): void {
  }

}
