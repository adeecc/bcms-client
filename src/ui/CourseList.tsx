import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";

import courseData from "../modules/sampleCourses";

interface Props {
  userId?: number;
  maxCourses?: number;
}

interface Course {
  code: string;
  name: string;
  year: string;
  sem: string;
  instructor: string;
}

const CourseList: React.FC<Props> = ({ userId, maxCourses }) => {
  const [courses, setCourses] = useState<Course[] | null>(null);

  useEffect(() => {
    // Get Courses from the API
    // const loadedPosts = axiosClient.get(`{apiBaseUrl}/courses/userId`);

    const loadedPosts = JSON.parse(courseData);

    if (maxCourses) {
        setCourses(loadedPosts.slice(0, maxCourses));
    } else {
        setCourses(loadedPosts);
    }
  }, [maxCourses, userId]);

  return (
    <div>
      {courses?.map((value, index) => (
        <CourseCard
          id={index}
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
