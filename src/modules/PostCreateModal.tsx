import React, { useContext } from "react";
import { UserContext } from "../global-context/userContext";
import { Modal } from "../ui/Modal";
import PostCreateForm from "./forms/PostCreateForm";

interface PostCreateModalProps {
    courseId: string;
  isOpen: boolean;
  onRequestClose: () => void;
}

const PostCreateModal: React.FC<PostCreateModalProps> = ({
  isOpen,
  onRequestClose,
}) => {
  const { state, dispatch } = useContext(UserContext);

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
