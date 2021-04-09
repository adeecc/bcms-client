import React, { useEffect, useState, useContext } from "react";

import CourseCard from "./CourseCard";
import { Course } from "../../global/interfaces/Course";
import { UserContext } from "../../global/context/userContext";
import { getUserCourses } from "../../api/courseClient";

interface Props {}

const UserCourse: React.FC<Props> = () => {
  const [courses, setCourses] = useState<Course[] | null>(null);
  const { state } = useContext(UserContext);

  const loadCourses = async () => {
    const res = await getUserCourses(state.userInfo?.id || -1);
    console.log(res);
    setCourses(res);
  };

  useEffect(() => {
    loadCourses();
  }, [state]);

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
          instructor={value.instructor_name}
        />
      ))}
    </div>
  );
};

export default UserCourse;
