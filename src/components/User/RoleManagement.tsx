import React, { useEffect, useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/outline";

import { UserRoles, UserInfo } from "../../global/context/user";
import { getAllUsers } from "../../api/miscClient";

import {addRoleToUser, removeRoleFromUser, getAllRoles} from "../../api/roleClient";

interface roleID {
  rid?: number | string;
  label?: string;
}

interface UserRowProps {
  id: string | number;
  username: string;
  name: string;
  userRoles: UserRoles[];
  roleIds: roleID[];
}

const UserRow: React.FC<UserRowProps> = ({ id, username, name, userRoles, roleIds }) => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [roles] = useState<UserRoles[]>([
    UserRoles.Admin,
    UserRoles.Faculty,
    UserRoles.Student,
  ]);

  const [userRolesState, setUserRolesState] = useState<UserRoles[]>(userRoles);

  const addRole = (label: UserRoles) => {
    const rid = roleIds.map(d => d.label).indexOf(label) + 1;
    addRoleToUser(id, rid);
    setUserRolesState([...userRolesState, label]);
  };

  const removeRole = (label: UserRoles) => {
    const rid = roleIds.map(d => d.label).indexOf(label) + 1;
    removeRoleFromUser(id, rid);
    
    const newState = userRolesState;
    newState.splice(newState.indexOf(label), 1);
    console.log(newState);

    setUserRolesState([...newState]);
  }

  const toggleDropdown = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setShowDropDown(!showDropDown);
  };

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

        <div className="flex relative justify-end space-x-2 my-auto col-span-5">
          {userRolesState?.map((value, index) => (
            <button
             className="bg-primary-700 rounded-lg px-2 text-primary-200 my-auto outline-none focus:outline-none hover:bg-accent hover:bg-opacity-75 hover:text-primary-700"
             onClick={() => removeRole(value)}
             >
              {value}
            </button>
          ))}
          <button
            className="text-primary-200 rounded-lg outline-none focus:outline-none"
            onClick={toggleDropdown}
          >
            <PlusCircleIcon className="w-5" />
          </button>

          {showDropDown && 
              <div className="absolute mt-9 z-10 px-3 py-2 flex flex-col space-y-2 bg-primary-700 rounded-md shadow-xl justify-center w-1/4">
              {roles?.map((element: UserRoles) => {
                return !userRolesState?.includes(element) ? (
                <button className="w-full text-primary-100 text-left" onClick={() => addRole(element)}>{element}</button>
                ) : null;
              })}
            </div>
          }
        </div>
      </div>
    </div>
  );
};

interface RoleManagementProps {}

const RoleManagement: React.FC<RoleManagementProps> = () => {
  const [users, setUsers] = useState<UserInfo[]>();
  const [roleIds, setRoleIds] = useState<roleID[]>([]);

  const loadUsers = async () => {
    const res = await getAllUsers();
    console.log(res);

    setUsers(res);
  };

  useEffect(() => {
    loadUsers();
    return () => {};
  }, []);

  const getAllRoleIds = async () => {
    setRoleIds(await getAllRoles());
  }

  useEffect(() => {
    getAllRoleIds();
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
            key={value.uid}
            id={value.uid}
            username={value.username}
            name={value.display_name || ""}
            userRoles={value.roles}
            roleIds={roleIds}
          />
        ))}
      </div>
    </>
  );
};

export default RoleManagement;
