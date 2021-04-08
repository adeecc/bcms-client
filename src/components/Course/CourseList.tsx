import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";

import { getAllCourses } from "../../api/courseClient";

import { Course } from "../../global/interfaces/Course";

interface Props {
  userId?: number;
  maxCourses?: number;
}

const CourseList: React.FC<Props> = ({ maxCourses }) => {
  const [courses, setCourses] = useState<Course[] | null>(null);

  const loadCourses = async () => {
    const res = await getAllCourses();
    console.log(res[0]);
    setCourses(res.slice(maxCourses));
  };

  useEffect(() => {
    loadCourses();
  }, []);

  return (
    <div>
      {courses?.map((value, index) => (
        <CourseCard
          key={value.cid}
          cid={value.cid}
          code={value.code}
          name={value.name}
          year={value.year}
          sem={value.sem}
          instructor={value.instructorName}
        />
      ))}
    </div>
  );
};

export default CourseList;
