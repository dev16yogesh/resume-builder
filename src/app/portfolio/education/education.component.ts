import { Component, OnInit , Input} from '@angular/core';
import { Resume } from '../resume';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
public resume: any;
  constructor() { 
   // this.resume = JSON.parse(sessionStorage.getItem('resume')) || new Resume();
  }

  @Input() degree;
  @Input() stream;
  @Input() university;
  @Input() year;

  ngOnInit(): void {
  }

}
