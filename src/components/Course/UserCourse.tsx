import React, { useEffect, useState, useContext } from "react";

import CourseCard from "./CourseCard";
import { Course } from "../../global/interfaces/Course";
import { UserContext } from "../../global/context/userContext";
import { getUserCourses } from "../../api/courseClient";
import { RefreshIcon } from "@heroicons/react/solid";

interface Props {}

const UserCourse: React.FC<Props> = () => {
  const [courses, setCourses] = useState<Course[] | null>(null);
  const { state } = useContext(UserContext);

  useEffect(() => {
    const loadCourses = async () => {
      const res = await getUserCourses(state.userInfo?.id || -1);
      console.log(res);
      setCourses(res);
    };
    
    loadCourses();
  }, [state]);

  return (
    <div>
      <div className="flex justify-between items-end mb-5">
        <h3 className="text-primary-100 my-auto">Your Courses</h3>
        <button className="py-2 px-6 my-auto rounded-lg text-button bg-accent outline-none focus:outline-none">
          <RefreshIcon className="w-6 h-6" />
        </button>
      </div>
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
    </div>
  );
};

export default UserCourse;
