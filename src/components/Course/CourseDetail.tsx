import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { PlusIcon } from "@heroicons/react/solid";

import { Course } from "../../global/interfaces/Course";
import PostCreateModal from "../modals/PostCreateModal";
import PostList from "../Post/PostList";
import { getCourseDetail } from "../../api/courseClient";

interface Props {}

// Todo: Add handler for button

const CourseDetail: React.FC<Props> = ({ children }) => {
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(true);

  const [isInstructor, setIsInstructor] = useState<boolean>(() => true);
  const [isEnrolled, setIsEnrolled] = useState<boolean>(() => false);

  const [course, setCourse] = useState<Course | null>();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const onClickCreatePost = (e: React.SyntheticEvent) => {
    setModalIsOpen(true);
  };

  const onClickEnroll = (e: React.SyntheticEvent) => {};

  const loadCourseDetails = async () => {
    const res = await getCourseDetail(id);
    console.log(res);
    setCourse(res);

    setIsLoading(false);
  };

  useEffect(() => {
    // Data Required
    // interface meh {
    // cid: string;
    // code: string;
    // name: string;
    // sem: string;
    // year: string;
    // instructor_id: number | string;
    // instructor_name: string;
    // }

    loadCourseDetails();
  }, [id]);

  return isLoading || !course ? (
    <h3 className="text-primary-200 text-center">Loading...</h3>
  ) : (
    <div className="">
      <div className="flex justify-between mb-2">
        <div className="truncate flex flex-row">
          <h3 className="text-primary-300 my-auto mr-2">{course.code}</h3>
          <h3 className="text-primary-100 my-auto">{course.name}</h3>
        </div>

        {isInstructor && (
          <div className="my-auto">
            <button
              className="px-4 my-auto rounded-lg text-button bg-accent focus:outline-none"
              onClick={onClickCreatePost}
            >
              <PlusIcon className="w-8 h-8 text-primary-100" />
            </button>
            <PostCreateModal
              courseId={id}
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
            />
          </div>
        )}

        {!isEnrolled && !isInstructor && (
          <button
            className="py-2 px-6 my-auto rounded-lg text-button bg-accent focus:outline-none"
            onClick={onClickEnroll}
          >
            Enroll
          </button>
        )}

        {/* {(!isEnrolled || isInstructor) && (
          {isInstructor ? () : ()}
          // <button className="py-2 px-6 my-auto rounded-lg text-button bg-accent">
          //   <SvgPlus />
          // </button>
        )} */}
      </div>
      <div className="flex mb-5">
        <h4 className="text-primary-300 mr-3">
          Sem {course.sem} | {course.year}
        </h4>
        <h4 className="text-accent mr-4">{course.instructor_name}</h4>
      </div>
      <PostList courseId={course.cid} />
    </div>
  );
};

export default CourseDetail;
