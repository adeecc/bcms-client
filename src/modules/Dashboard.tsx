import React from "react";
import PostList from "../ui/PostList";

interface Props {}

const Dashboard: React.FC = (props: Props) => {
  return <PostList maxPosts={5}/>;
};

export default Dashboard;
