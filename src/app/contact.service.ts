import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Contact } from './models/contact';
import { ContactResponse } from './models/contact-response';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private urlContactsList = 'https://randomuser.me/api/?results=20&seed=nuvalence'

  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contact[]> {
    return this.http.get<ContactResponse>(this.urlContactsList)
      .pipe(
        map(resp => resp.results),
        catchError(this.handleError<Contact[]>('getContacts', []))
      );
  }

  /**
   * Returns a single user based on id. Filters through the whole list though
   * because it doesn't seem like the API actually supports getting a single specific
   * user, so we're making much bigger calls than I'd like to.
   * @param id 
   * @returns 
   */
  getContact(id: string): Observable<Contact | undefined> {
    return this.http.get<ContactResponse>(this.urlContactsList)
      .pipe(
        map(resp => resp.results.find(contact => contact.id.value === id)),
        catchError(this.handleError<Contact>(`getContact: ${id}`, undefined))
      )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of (result as T);
    }
  }
}
