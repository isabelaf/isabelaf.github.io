import { Component, OnInit } from '@angular/core';

import { Project } from '../models/project.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
//   styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  technologies: string[] = [];
  projects: Project[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getTechnologies().subscribe(
      technologies => {
        this.technologies = technologies;
      }
    );

    this.dataService.getProjects().subscribe(
      projects => {
        this.projects = projects;
      }
    );
  }
}
