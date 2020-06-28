import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { EducationComponent } from './portfolio/education/education.component';
import { SkillComponent } from './portfolio/skill/skill.component';
import { ExperienceComponent } from './portfolio/experience/experience.component';
import { ProjectsComponent } from './portfolio/projects/projects.component';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './portfolio/footer/footer.component';
import { PortfolioFormComponent } from './portfolio/portfolio-form/portfolio-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    EducationComponent,
    SkillComponent,
    ExperienceComponent,
    ProjectsComponent,
    FooterComponent,
    PortfolioFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
