import { Injectable } from '@angular/core';
import { Hotel } from '../entities/hotel'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  base_path = 'http://localhost:8000';

  constructor(private httpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  allHotels = []

  getAllHotels(): Observable<Hotel[]> {
    return this.httpClient.get<Hotel[]>(this.base_path + '/hotels/list/',
      this.httpOptions)
  }

}
