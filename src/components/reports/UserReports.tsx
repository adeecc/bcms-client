import React, { useEffect, useMemo, useState } from "react";
import { useTable } from "react-table";
import { getAllUsers } from "../../api/miscClient";

// {
//   uid: 1;
//   display_name: "Abhishek Sarkar";
//   username: "abhisheksarkar";
//   email: "abhisheksarkar@bcms.com";
//   phone_no: "9998887776";
//   roles: ["faculty"];
//   verified: true;
//   created_at: "2021-04-09T17:13:47.383Z";
//   updated_at: "2021-04-09T17:14:27.712Z";
// }

interface userData {
  uid: string | number;
  display_name?: string;
  username: string;
  email?: string;
  phone_no: string | number;
  roles: string[];
  verified: boolean;
  created_at: string;
  updated_at: string;
}

interface Props {}

const UserReports: React.FC<Props> = () => {
  const [data, setData] = useState<userData[]>([]);

  const loadUserData = async () => {
    const res = await getAllUsers();
    console.log(res[0]);

    setData(res);
  };

  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <div className="overflow-scroll">
      <h1 className="text-primary-100">YEE</h1>
      <table className="text-primary-100 table-auto">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Contact</th>
          <th>Roles</th>
          <th>Verification</th>
          <th>Created</th>
          <th>Last Updated</th>
        </tr>
        {data?.map((el: userData) => {
          return (
            <tr>
              <th>{el.uid}</th>
              <th>{el.display_name}</th>
              <th>{el.username}</th>
              <th>{el.email}</th>
              <th>{el.phone_no}</th>
              <th>{el.roles}</th>
              <th>{el.verified}</th>
              <th>{el.created_at}</th>
              <th>{el.updated_at}</th>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default UserReports;
