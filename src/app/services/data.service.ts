import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import * as moment from 'moment';

import { AppConstants } from '../app.constants';
import { Details } from '../models/details.model';
import { Project } from '../models/project.model';

@Injectable()
export class DataService {
  constructor(private httpClient: HttpClient) {
  }

  getDetails(): Observable<Details> {
    return this.httpClient.get<Details>('/assets/data/details.json');
  }

  getTechnologies(): Observable<string[]> {
    return this.httpClient.get<string[]>('/assets/projects/technologies.json');
  }

  getProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>('/assets/projects/projects.json');
  }

  calculateAgeOnMarts(birthdate: Date): number {
    const daysOnEarth = moment().diff(birthdate, 'days');
    return daysOnEarth / AppConstants.marsYearDays;
  }
}
