import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from './users.modal';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(
    private http: HttpClient
  ) { }
  path: any = 'http://localhost:3000/records';

  getDetails() {
    return this.http.get<Users[]>(this.path);
  }
}
