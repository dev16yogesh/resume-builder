import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from '../app/portfolio/portfolio.component';
import { PortfolioFormComponent } from './portfolio/portfolio-form/portfolio-form.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
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
