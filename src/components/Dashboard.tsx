import React, { useContext, useEffect, useState } from "react";
import PostList from "./Post/PostList";

import { clearAllNotifications } from "../api/notificationClient";
import { UserContext } from "../global/context/userContext";
import { UserRoles } from "../global/context/user";
import CourseList from "./Course/CourseList";
import Notifications from "./User/Notifications";
import { RefreshIcon } from "@heroicons/react/solid";

interface Props {}

const AdminDashboard: React.FC = (props: Props) => {
  const [reload, setReload] = useState<boolean>(false);
  const clearNotifications = (e: React.SyntheticEvent) => {
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
          <RefreshIcon />
        </button>
      </div>
      <PostList maxPosts={15} />;
    </>
  );
};

const FacultyDashboard: React.FC = (props: Props) => {
  const [reload, setReload] = useState<boolean>(false);
  const clearNotifications = (e: React.SyntheticEvent) => {
    setReload(true);
  };

  useEffect(() => {
    setReload(false);
  }, [reload]);

  return (
    <>
      <div className="flex justify-between items-end mb-5">
        <h3 className="text-primary-100 my-auto">Your Courses</h3>
        <button
          onClick={clearNotifications}
          className="py-2 px-6 my-auto rounded-lg text-button bg-accent"
        >
          <RefreshIcon />
        </button>
      </div>
      <CourseList />;
    </>
  );
};

const Dashboard: React.FC = (props: Props) => {
  const { state } = useContext(UserContext);

  const isAdmin = state.userInfo?.roles.includes(UserRoles.Admin);
  const isFaculty = state.userInfo?.roles.includes(UserRoles.Faculty);

  useEffect(() => {
    console.log(state);
  });

  if (isAdmin) return <AdminDashboard />;
  if (isFaculty) return <FacultyDashboard />;

  return <Notifications />;
};

export default Dashboard;
