import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../interfaces/company';

@Injectable({
  providedIn: 'root'
})
export class AutocompleteCompanyService {
  private readonly apiUrl = 'https://autocomplete.clearbit.com/v1/companies/suggest?query=';

  constructor(
    private http: HttpClient
  ) { }

  getCompanies(name: string): Observable<Company[]> {
    return this._request(name)
  }

  private _request(path: string, method: string = 'GET'): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    const options = {
      headers: headers,
    }
    return this.http
      .request( method, this.apiUrl + path, options);
  }

}
