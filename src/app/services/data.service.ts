import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import * as moment from 'moment';

import { AppConstants } from '../app.constants';
import { Details } from '../models/details.model';

@Injectable()
export class DataService {
  constructor(private httpClient: HttpClient) {
  };

  getDetails(): Observable<Details> {
    return this.httpClient.get<Details>('/assets/data/details.json');
  };

  calculateAgeOnMarts(birthdate: Date): number {
    const daysOnEarth = moment().diff(birthdate, 'days');
    return daysOnEarth / AppConstants.marsYearDays;
  }
}
