import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  // getAllCards(): Observable<any> {
  //   return this.http.get<any>(`${environment.getAllCards}`, {});
  // }

  // insertAllCards(body:any): Observable<any> {
  //   return this.http.post<any>(`${environment.insertTickets}?body:${body}`, {});
  // }


  
  // updateEditedTickets(body: any): Observable<any> {
  //   return this.http.put<any>(`${environment.updateTickets}`, body);
  // }
}
