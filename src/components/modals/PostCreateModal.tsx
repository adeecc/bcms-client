import React from "react";
import { Modal } from "./Modal";
import PostCreateForm from "../forms/PostCreateForm";

interface PostCreateModalProps {
    courseId: string;
  isOpen: boolean;
  onRequestClose: () => void;
}

const PostCreateModal: React.FC<PostCreateModalProps> = ({
  isOpen,
  onRequestClose,
}) => {

  //   if (!state.isLoggedIn) {
  //     return null;
  //   }

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <PostCreateForm courseId={0}/>
    </Modal>
  );
};

export default PostCreateModal;
