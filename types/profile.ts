export interface Profile {
  id: string;
  name: string;
  title: string;
  yearsExperience: number;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  bio: {
    short: string;
    long: string;
  };
  education: {
    degree: string;
    institution: string;
    location: string;
    gpa: string;
    expectedGraduation: string;
    coursework: string[];
  };
}

