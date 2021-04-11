import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../global/context/userContext";
import CourseCreateModal from "../modals/CourseCreateModal";

import { UserRoles } from "../../global/context/user";


import { PlusIcon, ArrowNarrowRightIcon } from "@heroicons/react/solid";
import { useHistory } from "react-router";

interface Props {}

const AdminToolCard: React.FC<Props> = () => {
  const { state } = useContext(UserContext);
  const history = useHistory()

  const IsAdmin = state.userInfo?.role.includes(UserRoles.Admin);
  const IsFaculty = state.userInfo?.role.includes(UserRoles.Faculty);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const onClickCreateCourse = (e: React.SyntheticEvent) => {
    setModalIsOpen(true);
  };

  const onClickRoleManagement = (e: React.SyntheticEvent) => {
    history.push("/roles")
  }

  // console.log(state);

  return IsAdmin || IsFaculty ? (
    <div className="max-w-sm rounded-lg overflow-hidden flex flex-col">
      <div className="px-8 py-6 bg-primary-800 border-b border-primary-600">
        <h4 className="text-primary-100 font-bold">Privilege Tools</h4>
      </div>
      <div className="px-8 py-6 bg-primary-700 w-full flex flex-col my-auto space-y-3">
        <div className="w-full flex justify-between my-auto">
          <h5 className="text-primary-200 font-bold my-auto">Create Course</h5>
          <button
            className="bg-primary-600 rounded ouline-none focus:ouline-none my-auto"
            onClick={onClickCreateCourse}
          >
            <PlusIcon className="w-8 h-8 text-primary-100" />
          </button>
          <CourseCreateModal isOpen={modalIsOpen} onRequestClose={closeModal} />
        </div>
        {IsAdmin && (
          <div className="w-full flex justify-between my-auto">
            <h5 className="text-primary-200 font-bold my-auto">
              Manage Roles
            </h5>
            <button
              className="bg-primary-600 rounded ouline-none focus:ouline-none my-auto"
              onClick={onClickRoleManagement}
            >
              <ArrowNarrowRightIcon className="p-1 w-8 text-primary-100" />
            </button>
          </div>
        )}
        {IsAdmin && (
          <div className="w-full flex justify-between my-auto">
            <h5 className="text-primary-200 font-bold my-auto">
              Generate Reports
            </h5>
            <button
              className="bg-primary-600 rounded ouline-none focus:ouline-none my-auto"
              onClick={onClickCreateCourse}
            >
              <ArrowNarrowRightIcon className="p-1 w-8 text-primary-100" />
            </button>
            <CourseCreateModal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
            />
          </div>
        )}
      </div>
    </div>
  ) : null;
};

export default AdminToolCard;
