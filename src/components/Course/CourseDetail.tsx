import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { PlusIcon } from "@heroicons/react/solid";

import { Course } from "../../global/interfaces/Course";
import PostCreateModal from "../modals/PostCreateModal";
import PostList from "../Post/PostList";
import {
  getCourseDetail,
  getUserCourses,
  enrollToCourse,
  withdrawFromCourse,
} from "../../api/courseClient";
import { UserContext } from "../../global/context/userContext";

interface Props {}

// Todo: Add handler for button

const CourseDetail: React.FC<Props> = ({ children }) => {
  const { id } = useParams<{ id: string }>();

  const { state } = useContext(UserContext);

  const history = useHistory();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isInstructor, setIsInstructor] = useState<boolean>();
  const [isEnrolled, setIsEnrolled] = useState<boolean>();
  const [course, setCourse] = useState<Course>();
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const onClickCreatePost = (e: React.SyntheticEvent) => {
    setModalIsOpen(true);
  };

  const onClickEnroll = async (e: React.SyntheticEvent) => {
    const res = await enrollToCourse(
      course?.cid || -1,
      state.userInfo?.id || -1
    );

    setIsEnrolled(true);
  };

  const onClickDisenroll = async (e: React.SyntheticEvent) => {
    const res = await withdrawFromCourse(
      course?.cid || -1,
      state.userInfo?.id || -1
    );

    setIsEnrolled(false);
    history.push("/user/course");
  };

  const loadCourseDetails = async () => {
    const res = await getCourseDetail(id);
    setCourse(res);

    setIsInstructor(res?.instructor_id === state.userInfo?.id);

    const userCourses: Course[] = await getUserCourses(
      state.userInfo?.id || -1
    );
    console.log(userCourses);
    console.table(res);

    const indexOfCourseInUserCourses = userCourses.findIndex(
      (o) => o.cid === res?.cid
    );

    setIsEnrolled(indexOfCourseInUserCourses >= 0);

    console.table({ isEnrolled, isInstructor });

    setIsLoading(false);
  };

  useEffect(() => {
    loadCourseDetails();
  }, [id, state]);

  useEffect(() => {}, [isEnrolled, isInstructor, modalIsOpen]);

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
              courseCode={course.code}
              courseName={course.name}
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
            />
          </div>
        )}

        {!isInstructor && isEnrolled && (
          <button
            className="py-2 px-6 my-auto rounded-lg text-button bg-accent focus:outline-none"
            onClick={onClickDisenroll}
          >
            Withdraw
          </button>
        )}

        {!isEnrolled && !isInstructor && (
          <button
            className="py-2 px-6 my-auto rounded-lg text-button bg-accent focus:outline-none"
            onClick={onClickEnroll}
          >
            Enroll
          </button>
        )}
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
