import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PortfolioComponent} from '../app/portfolio/portfolio.component';
import { PortfolioFormComponent } from './portfolio/portfolio-form/portfolio-form.component';
const routes: Routes = [
  {
    path: '',
    component: PortfolioComponent
  },
  {
    path : 'resume',
    component: PortfolioComponent
  },
  {
    path: 'resumeBuilder',
    component: PortfolioFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {
}
