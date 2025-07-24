export interface IPublicCourseBySlug {
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
  categories?: Category[];
  createdBy: CreatedBy;
  instructors: Instructor[];
  courseSections?: Course[];
}

interface Course {
  id: string;
  status: boolean;
  creationDate: string;
  title: string;
  slug: string;
  description: string;
  positionOrder: number;
  courseClasses?: Course[];
  createdBy: CreatedBy;
  course?: IPublicCourseBySlug;
  courseSection?: Course;
}

interface CreatedBy {
  id: string;
  creationDate: string;
  lastActivity: string;
  isActive: boolean;
  username: string;
  clerkId: string;
  name: string;
  lastName: string;
  phone: null;
  roles: string[];
}

interface Category {
  id: string;
  status: boolean;
  visible: boolean;
  creationDate: string;
  title: string;
  slug: string;
  createdBy: CreatedBy;
}

interface Instructor {
  id: string;
  isActive: boolean;
  creationDate: string;
  fullName: string;
  profilePictureUrl: string;
  profesionalTitle: string;
}
