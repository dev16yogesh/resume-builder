import { Injectable } from '@angular/core';
import { ResumeResponse } from '../interface/resume-interface';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  private resumeResponse: ResumeResponse;
  constructor() { }

  public setResumeResponse(resumeResponse: ResumeResponse) {
    this.resumeResponse = resumeResponse;
  }
  public getResumeResponse() {
    return this.resumeResponse;
  }
}
