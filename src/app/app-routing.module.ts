import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { ViewContactDetailComponent } from './view-contact-detail/view-contact-detail.component';
import { ViewContactsListComponent } from './view-contacts-list/view-contacts-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
  { path: 'contacts', component: ViewContactsListComponent, title: 'Nuvalence Address Book' },
  { path: 'contacts/:id', component: ViewContactDetailComponent },
  { path: 'placeholder', component: PlaceholderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
