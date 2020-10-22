import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  public exp: any;
  @Input() experienceData: any;
  constructor() {
   }

  public ngOnInit(): void {
    this.exp = this.experienceData;
  }

}
