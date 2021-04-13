import React from "react";
import { Modal } from "./Modal";
import PostCreateForm from "../forms/PostCreateForm";
import { Post } from "../../global/interfaces/Post";

interface PostCreateModalProps {
  post?: Post;
  courseId: string | number;
  courseName: string;
  courseCode: string;
  isOpen: boolean;
  onRequestClose: () => void;
}

const PostCreateModal: React.FC<PostCreateModalProps> = ({
  post,
  isOpen,
  onRequestClose,
  courseId,
  courseName,
  courseCode,
}) => {
  //   if (!state.isLoggedIn) {
  //     return null;
  //   }

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <PostCreateForm courseId={courseId} courseCode={courseCode} courseName={courseName} post={post}/>
    </Modal>
  );
};

export default PostCreateModal;
