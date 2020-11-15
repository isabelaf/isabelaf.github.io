import { Component, OnInit } from '@angular/core';

import { Project } from '../models/project.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {
  technologies: Map<string, boolean> = new Map<string, boolean>();
  showAllTechnologies = true;

  projects: Project[] = [];
  private allProjects: Project[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getTechnologies().subscribe(
      technologies => {
        technologies.forEach(t => {
          this.technologies.set(t, false);
        });
      }
    );

    this.dataService.getProjects().subscribe(
      projects => {
        this.allProjects = projects;
        this.filterProjects();
      }
    );
  }

  selectUnselectTechnology(technology: string): void {
    this.technologies.set(technology, !this.technologies.get(technology));

    this.showAllTechnologies = true;
    this.technologies.forEach(selected => {
      if (selected) {
        this.showAllTechnologies = false;
        return;
      }
    });

    this.filterProjects();
  }

  selectAllTechnologies(): void {
    this.showAllTechnologies = true;
    this.technologies.forEach((_, t) => {
      this.technologies.set(t, false);
    });

    this.filterProjects();
  }

  private filterProjects(): void {
    this.projects = this.allProjects.filter(p => this.showProject(p));
  }

  private showProject(project: Project): boolean {
    if (this.showAllTechnologies)
      return true;
    return project.implementation.find(i => this.technologies.get(i)) !== undefined;
  }
}
