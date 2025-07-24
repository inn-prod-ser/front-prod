import { CoursesCard } from "@/components";

export const RecommendedCourses = () => {
  return (
    <div className="learning_recommended">
      <div className="learning_recommended-header">
        <p className="learning_recommended-title">TE PODRÍAN INTERESAR...</p>
      </div>

      <div className="learning_recommended-courses">
        <CoursesCard
          category={ "" }
          description={ "" }
          duration={ "" }
          enabled={ false }
          courseUnderConstruction={ true }
          name={ "" }
          slug={ "" }
        />
      </div>
    </div>
  );
};
