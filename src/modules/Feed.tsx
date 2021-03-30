import React from "react";
import PostList from "../ui/PostList";

interface Props {}

const Feed: React.FC<Props> = (props: Props) => {
  return <PostList maxPosts={5}/>;
};

export default Feed;
