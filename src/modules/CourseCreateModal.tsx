import React from "react";
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
