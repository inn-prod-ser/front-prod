export interface IPublishedCoursesByCategory {
  id: string;
  title: string;
  slug: string;
  courses: Course[];
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  isPublic: boolean;
  status: boolean;
  creationDate: string;
  estimatedDuration: string;
  courseUnderConstruction: boolean;
  hasCertificate: boolean;
  difficultyLevel: string;
}
