import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import SvgPlus from "../icons/SolidPlus";

import { Course } from "../interfaces/Course";
import PostList from "./PostList";

interface Props {}

// Todo: Add handler for button

const CourseDetail: React.FC<Props> = ({}) => {
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [isInstructor, setIsInstructor] = useState<boolean>(() => {
    // check if instructor id = current user id
    return false;
  });

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
      instructor: "DR. V Ramaswamy", // Get instructor id and convert it to name
      year: "2020",
      sem: "1",
    };
  });

  useEffect(() => {
    // Data Required
    // interface meh {
    //     courseName: string;
    //     courseCode: string;
    //     courseInstructorId: string; // -> courseInstrucorName: string
    //     courseYear: string;
    //     courseSem: string;
    //     userIsEntrolled: boolean; // derived from locally Stored users course
    //     userIsInstructor: boolean; // derived from courseInstructorId & userId
    // }

    setIsLoading(false);
  }, []);

  return isLoading ? (
    <h3 className="text-primary-200 text-center">Loading...</h3>
  ) : (
    <div className="">
      <div className="flex justify-between mb-2">
        <div className="truncate flex flex-row">
          <h3 className="text-primary-300 my-auto mr-2">{course.code}</h3>
          <h3 className="text-primary-100 my-auto">{course.name}</h3>
        </div>

        {(!isEnrolled || isInstructor) && (
          <button className="py-2 px-6 my-auto rounded-lg text-button bg-accent">
            {isInstructor ? <SvgPlus /> : "Enroll"}
          </button>
        )}
      </div>
      <div className="flex mb-5">
        <h4 className="text-primary-300 mr-3">
          Sem {course.sem} | {course.year}
        </h4>
        <h4 className="text-accent mr-4">{course.instructor}</h4>
      </div>
      <PostList courseId={course.id} />
    </div>
  );
};

export default CourseDetail;
