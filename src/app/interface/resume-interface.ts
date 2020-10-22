export interface ResumeResponse {
  firstName: string;
  lastName: string;
  contact: Contact;
  designation: string;
  introduction: string;
  skills: Array<Skill>;
  experience: Array<Experience>;
  education: Array<Education>;
  project: Projects;
}

export class Experience {
  company: string;
  duration: string;
  role: string;
  description: string;
}
export class Contact {
  email: string;
  phone: string;
  location: Address;
  linkedIn: string;
}
export class Address {
  city: string;
  state: string;
  pincode: string;
}
export class Education {
  degree: string;
  stream: string;
  university: string;
  tenure: number;
}

export class Projects {
  projectTitle: string;
  projectDuration: string;
  keySkills: string;
  responsibility: string;
  role: string;
  projectDescription: string;
}

export class Skill {
  technology : string;
  rate : string;
}
