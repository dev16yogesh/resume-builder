import { Component, OnInit, Input } from '@angular/core';
import { PortfolioServiceService } from '../service/portfolio-service.service';
import { Router, Event } from '@angular/router';
import {Resume} from './resume';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  public resumeData: any;
  public resume: Resume;
  public resume1: any;

  constructor( public router: Router, private portfolioservice: PortfolioServiceService) {
    this.resume = JSON.parse(sessionStorage.getItem('resume')) || new Resume();
    this.resume1 = JSON.parse(sessionStorage.getItem('resume')) || new Resume();
  }

   public ngOnInit(): void {
    this.portfolioservice.getData()
      .subscribe((data: any): void => {
        this.resumeData = data;
      });
  }

//   public convetToPDF()
// {
// var data = document.getElementById('contentToConvert');
// html2canvas(data).then(canvas => {
// // Few necessary setting options
// var imgWidth = 208;
// var pageHeight = 295;
// var imgHeight = canvas.height * imgWidth / canvas.width;
// var heightLeft = imgHeight;
// imgHeight=imgHeight-30;

// const contentDataURL = canvas.toDataURL('image/png')
// let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
// var position = 0;
// pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
// pdf.save('Resume.pdf'); // Generated PDF
// });
// }

htmltoPDF()
{
    // parentdiv is the html element which has to be converted to PDF
    html2canvas(document.querySelector("#contentToConvert")).then(canvas => {

      var pdf = new jspdf('p', 'pt', [canvas.width, canvas.height]);

      var imgData  = canvas.toDataURL("image/jpeg", 1.0);
      pdf.addImage(imgData,0,0,canvas.width, canvas.height);
      pdf.save('Resume.pdf');

  });

}
  public openLinkedIn(){
    window.open(this.resumeData.contact.linkedIn, "_blank", "noopener");
    console.log(this.resumeData.contact.linkedIn);
  }

}
