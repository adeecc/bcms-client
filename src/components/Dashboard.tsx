import React from "react";
import PostList from "./Post/PostList";

interface Props {}

const Dashboard: React.FC = (props: Props) => {
  return (
    <>
      <div className="flex justify-between items-end mb-5">
        <h3 className="text-primary-100 my-auto">Your Feed</h3>
        <button className="py-2 px-6 my-auto rounded-lg text-button bg-accent">
          Enroll
        </button>
      </div>
      <PostList maxPosts={15} />;
    </>
  );
};

export default Dashboard;
