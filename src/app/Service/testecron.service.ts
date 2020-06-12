import { Injectable } from '@angular/core';
import {Client} from '../models/client';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TestecronService {
  list: Client[];
 // private currentUserSubject: BehaviorSubject<Doctor>;
  //private baseUrl = 'http://localhost:8080//api/clients';

  constructor(private http: HttpClient) { }

  // all clients
  //getAllClients(): Observable<Client[]> {
    //return this.http.get<Client[]>(`${this.baseUrl}` + `/all`);
 // }



  //refreshList() {
   // this.http.get(this.baseUrl + '/all')
     // .toPromise().then(res => this.list = res as Client[]);
 // }


}
