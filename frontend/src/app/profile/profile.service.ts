import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, map, tap } from 'rxjs';

import { LPUserPage } from './lp_user-page.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private readonly API = '/api';

  constructor(private http: HttpClient) {}

  getUser(email: string) {
    return this.http.get<LPUserPage>(this.API + `/lpuser/${email}`).pipe(
      first(),
      map((data) => data.lpuserRetrieved)
    );
  }
}
