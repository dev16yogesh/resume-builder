import { Component, OnInit } from '@angular/core';
import { PortfolioServiceService } from '../../service/portfolio-service.service';
import { Resume } from '../resume';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
public jsonData;
public resume: any;

  constructor(private portfolioservice: PortfolioServiceService) {
    this.resume = JSON.parse(sessionStorage.getItem('resume')) || new Resume();
  }
 
  public ngOnInit(): void {
    this.portfolioservice.getData()
      .subscribe((data: any): void => {
        this.jsonData = data;
      });
  }

}
