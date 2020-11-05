import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import * as moment from 'moment';

import { Details } from './models/details.model';

@Injectable()
export class AppService {
  constructor(private httpClient: HttpClient) {
  };

  getDetails(): Observable<Details> {
    return this.httpClient.get<Details>('/assets/data/details.json');
  };

  calculateAgeOnMarts(birthdate: Date): number {
    const marsYearDays = 687;
    const daysOnEarth = moment().diff(birthdate, 'days');
    return Math.floor(daysOnEarth / marsYearDays);
  }
}
