import React from "react";

import CourseList from "../ui/CourseList";

interface Props {}

const Courses: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <CourseList maxCourses={15} />
    </div>
  );
};

export default Courses;
