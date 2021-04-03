import React, { useContext, useState } from "react";
import { UserContext } from "../global-context/userContext";
import SvgPlus from "../icons/SolidPlus";
import CourseCreateModal from "../modules/CourseCreateModal";

interface Props {}

const AdminToolCard: React.FC<Props> = ({}) => {
  const { state, dispatch } = useContext(UserContext);

  const IsAdmin = !state.userInfo?.role.includes(UserRoles.Admin);
  const IsFaculty = state.userInfo?.role.includes(UserRoles.Faculty);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const onClickCreateCourse = (e: React.SyntheticEvent) => {
    setModalIsOpen(true);
  };


  console.log(state);

  return IsAdmin || IsFaculty ? (
    <div className="max-w-sm rounded-lg flex flex-col">
      <div className="px-4 py-2 bg-primary-800 border-b border-primary-600">
        <h4 className="text-primary-100 font-bold">Admin Tools</h4>
      </div>
      <div className="px-4 py-2 bg-primary-700 w-full flex justify-between my-auto">
        <h5 className="text-primary-200 font-bold my-auto">Create Course</h5>
        <button className="bg-primary-600 p-2 rounded ouline-none focus:ouline-none my-auto" onClick={onClickCreateCourse}>
          <SvgPlus />
        </button>
        <CourseCreateModal isOpen={modalIsOpen} onRequestClose={closeModal} />
      </div>
    </div>
  ) : null;
};

export default AdminToolCard;
