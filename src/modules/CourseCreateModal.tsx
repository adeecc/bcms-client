import React, { useContext } from "react";
import { UserContext } from "../global-context/userContext";
import { Modal } from "../ui/Modal";
import CourseCreateForm from "./forms/CourseCreateForm";

interface CourseCreateModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const CourseCreateModal: React.FC<CourseCreateModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  const { state, dispatch } = useContext(UserContext);

  //   if (!state.isLoggedIn) {
  //     return null;
  //   }

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <CourseCreateForm />
    </Modal>
  );
};

export default CourseCreateModal;
