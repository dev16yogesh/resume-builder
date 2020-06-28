import { Component, OnInit } from '@angular/core';
import { PortfolioServiceService } from '../../service/portfolio-service.service';
import { Resume } from '../resume';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  public jsonData: any;
  public resume: any;
  constructor(public portfolioservice: PortfolioServiceService) {
    this.resume = JSON.parse(sessionStorage.getItem('resume')) || new Resume();
   }

  public ngOnInit(): void {
    this.portfolioservice.getData()
      .subscribe((data: any): void => {
        this.jsonData = data;
      });
  }

}
