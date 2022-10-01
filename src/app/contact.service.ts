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
