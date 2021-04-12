import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUserCourses } from "../../api/courseClient";
import { UserContext } from "../../global/context/userContext";
import { Course } from "../../global/interfaces/Course";

interface Props {}

const CourseFeed: React.FC<Props> = () => {
  const [courses, setCourses] = useState<Course[] | null>(null);
  const { state } = useContext(UserContext);

  const loadCourses = async () => {
    const res = await getUserCourses(state.userInfo?.id || -1);
    setCourses(res);
  };

  useEffect(() => {
    loadCourses();
  }, [state]);
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-md flex flex-col space-y-10">
        <h3 className="text-primary-100 my-auto font-bold">Your Courses</h3>

        <div className="flex flex-col space-y-7">
          {courses?.map((value) => (
            <Link
              key={value.cid}
              to={`/course/${value.cid}`}
              className="flex space-x-1"
            >
              <div className="grid grid-cols-5 gap-2 w-full">
                <div className="text-primary-300 col-span-1">{value.code}</div>
                <div className="text-primary-100 font-bold col-span-4">
                  {value.name}
                </div>
              </div>
            </Link>
          ))}

          <Link to="/user/course" className="flex space-x-1">
            <div className="text-primary-100 font-bold">More...</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseFeed;
