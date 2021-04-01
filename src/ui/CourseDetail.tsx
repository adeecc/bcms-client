import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import { Course } from "../interfaces/Course";
import PostList from "./PostList";

interface Props {}

const CourseDetail: React.FC<Props> = ({}) => {
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [isEnrolled, setIsEnrolled] = useState<boolean>(() => {
    //   fetch(baseApiUr/courses)
    //  Check if this course is in the courses of the student;
    // If yes, then true
    // else false
    return false;
  });

  const [course, setCourse] = useState<Course>(() => {
    return {
      id,
      name: "Logic in Computer Science",
      code: "CS F214",
      instructor: "DR. V Ramaswamy",
      year: "2020",
      sem: "1",
    };
  });

  const [posts, setPosts] = useState(() => {});

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return isLoading ? (
    <h3 className="text-primary-200 text-center">Loading...</h3>
  ) : (
    <div className="">
      <div className="flex justify-between items-end mb-2">
        <div className="truncate flex flex-row">
          <h3 className="text-primary-300 my-auto mr-2">{course.code}</h3>
          <h3 className="text-primary-100 my-auto">{course.name}</h3>
        </div>

        {!isEnrolled && (
          <button className="py-2 px-6 my-auto rounded-lg text-button bg-accent">
            Enroll
          </button>
        )}
      </div>
      <div className="flex items-end mb-5">
        <h4 className="text-primary-300 mr-3">
          Sem {course.sem} | {course.year}
        </h4>
        <h4 className="text-accent mr-4">{course.instructor}</h4>
      </div>
      <PostList courseId={course.id}/>
    </div>
  );
};

export default CourseDetail;
