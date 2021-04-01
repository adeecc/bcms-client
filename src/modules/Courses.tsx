import React from "react";

import CourseList from "../ui/CourseList";

interface Props {}

const Courses: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <div className="flex justify-between items-end mb-5">
        <h3 className="text-primary-100 my-auto">Your Courses</h3>
        <button className="py-2 px-6 my-auto rounded-lg text-button bg-accent">
          Enroll
        </button>
      </div>
      <CourseList maxCourses={15} />
    </div>
  );
};

export default Courses;
