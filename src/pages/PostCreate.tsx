import React from "react";
import { PostCreateForm } from "../modules/forms/PostCreateForm";

interface Props {}

const PostCreate = (props: Props) => {
  return (
    <div>
      <PostCreateForm courseId={2}/>
    </div>
  );
};

export default PostCreate;