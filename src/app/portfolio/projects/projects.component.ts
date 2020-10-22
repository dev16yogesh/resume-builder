import { Component, OnInit, Input } from '@angular/core';
import { PortfolioServiceService } from '../../service/portfolio-service.service';
import { Resume } from '../resume';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public projects: any;
  @Input() projectData: any;

  constructor() {
  }

  public ngOnInit(): void {
    this.projects = this.projectData;
  }

}
