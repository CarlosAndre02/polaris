import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, map, of, tap } from 'rxjs';

import { Language } from './model/language.model';
import { LP_User } from './model/lp_user.model';
import { LanguagePage } from './model/language-page.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private readonly API = '/api/';

  constructor(private http: HttpClient) {}

  getLanguages() {
    return this.http.get<LanguagePage>(this.API + 'language').pipe(
      first(),
      map((data) => data.languages)
    );
  }

  postLPUser(data: LP_User) {
    const languagesOnlyId = data.languages?.map((lang) => lang._id);
    const payload = {
      email: data.email,
      name: data.name,
      languages: languagesOnlyId
    };
    return this.http.post(this.API + 'lpuser', payload).pipe(first());
  }
}
