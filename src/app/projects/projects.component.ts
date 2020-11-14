import { Component, OnInit } from '@angular/core';

import { Project } from '../models/project.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {
  technologies: Map<string, Boolean> = new Map<string, Boolean>();
  projects: Project[] = [];
  showAllTechnologies = true;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getTechnologies().subscribe(
      technologies => {
        technologies.forEach(t => {
          this.technologies.set(t, false);
        })
      }
    );

    this.dataService.getProjects().subscribe(
      projects => {
        this.projects = projects;
      }
    );
  }

  selectUnselectTechnology(technology: string) {
    this.technologies.set(technology, !this.technologies.get(technology));

    this.showAllTechnologies = true;
    this.technologies.forEach(selected => {
      if (selected) {
        this.showAllTechnologies = false;
        return;
      }
    });
  }

  selectAllTechnologies() {
    this.showAllTechnologies = true;
    this.technologies.forEach((_, t) => {
      this.technologies.set(t, false);
    });
  }

  showProject(project: Project): Boolean {
    if (this.showAllTechnologies)
      return true;
    return project.implementation.find(i => this.technologies.get(i)) !== undefined;
  }
}
