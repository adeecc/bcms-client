import React from "react";
import CourseCreateForm from "../components/forms/CourseCreateForm";

interface Props {}

const CourseCreate: React.FC<Props> = (props: Props) => {
  return (
    <div className="">
      <CourseCreateForm/>
    </div>
  );
};

export default CourseCreate;
