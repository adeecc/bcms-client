import React, { useContext, useEffect, useState } from "react";
import CourseCard from "./CourseCard";

import { getAllCourses, getProfCourses } from "../../api/courseClient";

import { Course } from "../../global/interfaces/Course";
import { UserContext } from "../../global/context/userContext";
import { UserRoles } from "../../global/context/user";

interface Props {
  userId?: number;
  maxCourses?: number;
}

const CourseList: React.FC<Props> = () => {
  const { state } = useContext(UserContext);
  const [courses, setCourses] = useState<Course[]>();

  const isFaculty = state.userInfo?.roles.includes(UserRoles.Faculty);

  useEffect(() => {
    const loadCourses = async () => {
      if (isFaculty) {
        const res = await getProfCourses(state.userInfo?.id || -1);
        console.log(res);
        setCourses(res);
      } else {
        const res = await getAllCourses();
        console.log(res);
        setCourses(res);
      }
    };
    loadCourses();
  }, [state, isFaculty]);

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

export default CourseList;
