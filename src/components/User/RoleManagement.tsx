import React, { useEffect, useState } from "react";
import { UserRoles, UserInfo } from "../../global-context/user";
import { PlusCircleIcon } from "@heroicons/react/outline";

interface UserRowProps {
  id: any;
  username: string;
  name: string;
  roles: UserRoles[] | null;
}

const UserRow: React.FC<UserRowProps> = ({ id, username, name, roles }) => {
  return (
    <div
      key={id}
      className="w-full bg-primary-800 hover:bg-primary-800 p-6 rounded-lg flex flex-col my-7"
    >
      <div className="grid grid-cols-8 my-auto">
        <img
          src={`https://ui-avatars.com/api/?background=fd6868&color=fff&name=${name
            ?.split(" ")
            .join("+")}`}
          alt="avatar"
          style={{ height: "3rem" }}
          className="rounded-full h-full object-cover col-span-1"
        />

        <div className="flex flex-col space-y-1 my-auto col-span-2">
          <div className="font-bold text-primary-100">{name}</div>
          <div className="text-primary-300">@{username}</div>
        </div>

        <div className="flex justify-end space-x-2 my-auto col-span-5">
          {roles?.map((value, index) => (
            <button className="bg-primary-700 rounded-lg px-2 text-primary-200 my-auto outline-none focus:outline-none">
              {value}
            </button>
          ))}
          <button className="text-primary-200 rounded-lg outline-none focus:outline-none">
            <PlusCircleIcon className="w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

interface RoleManagementProps {}

const RoleManagement: React.FC<RoleManagementProps> = () => {
  const [users, setUsers] = useState<UserInfo[] | null>(null);

  useEffect(() => {
    const newUsers = [
      {
        id: 1,
        username: "adichopra11",
        fullName: "Aditya Chopra",
        role: [UserRoles.Admin, UserRoles.Student],
      },
      {
        id: 2,
        username: "sike",
        fullName: "Sidharth Anand",
        role: [UserRoles.Admin, UserRoles.Student],
      },
      {
        id: 3,
        username: "simp",
        fullName: "Aryan Arora",
        role: [UserRoles.Admin, UserRoles.Student],
      },
      {
        id: 4,
        username: "chaubz",
        fullName: "Aryan Chaubal",
        role: [UserRoles.Admin, UserRoles.Student],
      },
    ];

    setUsers(newUsers);
    return () => {};
  }, []);

  return (
    <>
      <div className="flex justify-between items-end mb-5">
        <h3 className="text-primary-100 my-auto">Role Management</h3>
        <button className="py-2 px-6 my-auto rounded-lg text-button bg-accent">
          New Role
        </button>
      </div>

      <div className="">
        {users?.map((value) => (
          <UserRow
            id={value.id}
            username={value.username}
            name={value.name || ""}
            roles={value.role}
          />
        ))}
      </div>
    </>
  );
};

export default RoleManagement;
