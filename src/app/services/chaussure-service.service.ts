import { Injectable } from '@angular/core';
import { chaussure } from '../../model/chaussure.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChaussureServiceService {

  apiURL: string = 'http://localhost:8080/chaussure/api/all';
  chaussures! : chaussure[]; 
  constructor(private http : HttpClient) { }

  listechaussures(): Observable<chaussure[]>{
    return this.http.get<chaussure[]>(this.apiURL);
    }
}
