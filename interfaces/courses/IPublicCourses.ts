import { ICategory } from "../category";

export interface IPublicCourses {
  id: string;
  status: boolean;
  creationDate: string;
  title: string;
  estimatedDuration: string;
  hasCertificate: boolean;
  slug: string;
  description: string;
  price: number;
  isPublic: boolean;
  courseUnderConstruction: boolean;
  difficultyLevel: string;
  categories: ICategory[];
  instructors: any[];
}
