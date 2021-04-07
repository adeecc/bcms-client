import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../global-context/userContext";
import { Course } from "../../interfaces/Course";
import courseData from "../../modules/sampleCourses";

interface Props {}

const CourseFeed: React.FC<Props> = ({}) => {
  const [courses, setCourses] = useState<Course[] | null>(null);
  const { state } = useContext(UserContext);

  useEffect(() => {
    // Get all the courses of the user

    const loadedPosts = JSON.parse(courseData).slice(0, 10);
    setCourses(loadedPosts);
  }, [state]);
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-md flex flex-col space-y-10">
        <h3 className="text-primary-100 my-auto font-bold">Your Courses</h3>

        <div className="flex flex-col space-y-7">
          {courses?.map((value, index) => (
            <Link key={value.id} to={`/course/${value.id}`} className="flex space-x-1">
              <div className="text-primary-300">{value.code}</div>
              <div className="text-primary-100 font-bold">
                {value.courseName}
              </div>
            </Link>
          ))}

          <Link to="/course" className="flex space-x-1">
            <div className="text-primary-100 font-bold">All Courses...</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseFeed;
