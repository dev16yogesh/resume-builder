import { Component, OnInit, Input } from '@angular/core';
import { Resume } from '../resume';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  constructor() { 
  }

  @Input() value;
  @Input() score;

  ngOnInit(): void {
  }

}
