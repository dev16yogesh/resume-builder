export class Resume {
    firstName: string;
    lastName: string;
    address: Address;
    designation: string;
    email: string;
    linkedin: string;
    phone: string;
    introduction: string;
    skills: Skill[] = [];
    experience: Experience[] = [];
    education: Education[] = [];
    projects: Projects;
    constructor() {
         this.experience.push(new Experience());
         this.education.push(new Education());
         this.skills.push(new Skill());
    }
}
export class Experience {
    company: string;
    designation: string;
    period: string;
    technology: string;
    skills: string;
    description: string;
}
export class Address{
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

export class Projects{
    company : string;
    designation : string;
    period : string;
    technology : string;
    skills : string;
    description : string;
}

export class Skill {
    technology : string;
    rate : string;
}