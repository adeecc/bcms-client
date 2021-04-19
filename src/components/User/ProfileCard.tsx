import React, { useContext, useEffect, useState } from "react";
import { getNotifications } from "../../api/notificationClient";
import { getUserCourses } from "../../api/courseClient";

import { UserContext } from "../../global/context/userContext";

interface Props {}

const ProfileCard: React.FC<Props> = () => {
  const { state } = useContext(UserContext);

  const [numNotifications, setNumNotifications] = useState(0);
  const [numCourses, setNumCourses] = useState(0);

  useEffect(() => {
    const loadNumNotifs = async () => {
      const res = await getNotifications();
      setNumNotifications(res?.length);
    };

    const loadNumCourse = async () => {
      const res = await getUserCourses(state.userInfo?.id || -1);
      setNumCourses(res?.length);
    };


    loadNumNotifs();
    loadNumCourse();
  }, [state]);

  return (
    <div className="max-w-sm bg-primary-800 rounded-lg shadow flex flex-col px-8 py-6 space-y-5">
      <div className="flex space-x-8">
        <img
          src={`https://ui-avatars.com/api/?background=fd6868&color=fff&name=${state.userInfo?.name
            ?.split(" ")
            .join("+")}`}
          alt="avatar"
          className="rounded-full h-full object-cover"
        />
        <div className="flex flex-col">
          <span className="text-primary-100 font-bold">
            {state.userInfo?.name}
          </span>
          <span className="text-primary-300">@{state.userInfo?.username}</span>
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="registered flex space-x-2">
          <div className="text-primary-100 font-bold">{numCourses}</div>
          <div className="text-primary-300">Courses</div>
        </div>
        <div className="notifiations flex space-x-2">
          <div className="text-primary-100 font-bold">{numNotifications}</div>
          <div className="text-primary-300">Notifications</div>
        </div>
      </div>
      <div className="flex text-primary-300">
        {state.userInfo?.bio || "Add a bio today!"}
      </div>
    </div>
  );
};

export default ProfileCard;
