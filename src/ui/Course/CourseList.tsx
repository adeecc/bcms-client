import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";

import { getAllCourses } from "../../api/courseClient";

interface Props {
  userId?: number;
  maxCourses?: number;
}

interface Course {
  cid: any;
  code: string;
  instructor_id: number;
  name: string;
  sem: string;
  year: string;
  instructor: string;
}

const CourseList: React.FC<Props> = ({ userId, maxCourses }) => {
  const [courses, setCourses] = useState<Course[] | null>(null);

  const loadCourses = async () => {
    const res = await getAllCourses();
    console.log(res[0])
    setCourses(res);
  }

  useEffect(() => {
    // Get Courses from the API

    loadCourses()
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
          instructor={value.instructor}
        />
      ))}
    </div>
  );
};

export default CourseList;
