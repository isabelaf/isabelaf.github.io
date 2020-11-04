import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';

@Injectable()
export class AppService {
  constructor(private httpClient: HttpClient) {
  };

  getDetails(): Observable<any[]> {
    return this.httpClient.get<any[]>('/assets/data/details.json');
  };
}