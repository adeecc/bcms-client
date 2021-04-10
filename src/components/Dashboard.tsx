import React, { useEffect, useState } from "react";
import PostList from "./Post/PostList";

import { clearAllNotifications } from "../api/notificationClient";

interface Props {}

const Dashboard: React.FC = (props: Props) => {
  const [reload, setReload] = useState<boolean>(false);
  const clearNotifications = (e: React.SyntheticEvent) => {
    clearAllNotifications();
    setReload(true);
  };

  useEffect(() => {
    setReload(false);
  }, [reload]);

  return (
    <>
      <div className="flex justify-between items-end mb-5">
        <h3 className="text-primary-100 my-auto">Your Feed</h3>
        <button
          onClick={clearNotifications}
          className="py-2 px-6 my-auto rounded-lg text-button bg-accent"
        >
          Clear Notifications
        </button>
      </div>
      <PostList maxPosts={15} />;
    </>
  );
};

export default Dashboard;
