import { Component, OnInit } from '@angular/core';

import { Project } from '../models/project.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {
  technologies = [];
  projects: Project[] = [];
  showAllTechnologies = true;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getTechnologies().subscribe(
      technologies => {
        technologies.forEach(t => {
          this.technologies.push({ name: t, isSelected: false });
        })
      }
    );

    this.dataService.getProjects().subscribe(
      projects => {
        this.projects = projects;
      }
    );
  }

  selectUnselectTechnology(technology) {
    technology.isSelected = !technology.isSelected;
    this.showAllTechnologies = this.technologies.find(t => t.isSelected) == undefined;
  }

  selectAllTechnologies() {
    this.showAllTechnologies = true;
    this.technologies.forEach(t => {
      t.isSelected = false;
    });
  }
}
