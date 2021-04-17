import React, { useEffect, useMemo, useState } from "react";
import { Column } from "react-table";

import ReportTable from "./ReportTable";
import { getAllUsers } from "../../api/miscClient";
import RoleBullet from "../common/RoleBullet";
import { Link } from "react-router-dom";

interface UserData {
  uid: string | number;
  display_name: string;
  username: string;
  email: string;
  phone_no: string | number;
  roles: string[];
  verified: boolean;
  created_at: string;
  updated_at: string;
}

interface Props {}

const UserReports: React.FC<Props> = () => {
  const [data, setData] = useState<UserData[]>([]);

  const loadUserData = async () => {
    const res = await getAllUsers();
    console.log(res[0]);

    setData(res);
  };

  useEffect(() => {
    loadUserData();
  }, []);

  const columns = useMemo<Column<UserData>[]>(
    () => [
      { Header: "ID", accessor: "uid" },
      { Header: "Name", accessor: "display_name" },
      { Header: "Username", accessor: "username" },
      { Header: "Email", accessor: "email" },
      { Header: "Contact", accessor: "phone_no" },
      {
        Header: "Roles",
        accessor: "roles",
        Cell: ({ cell: { value } }) => (
          <div className="flex space-x-2 my-auto">
            {value.map((el) => (
              <RoleBullet value={el} />
            ))}
          </div>
        ),
      },
      {
        Header: "User Created",
        accessor: "created_at",
        Cell: ({ cell: { value } }) => (
          <div className="flex space-x-2 my-auto">
            {new Date(value).toLocaleString()}
          </div>
        ),
      },
      {
        Header: "Last Updated",
        accessor: "updated_at",
        Cell: ({ cell: { value } }) => (
          <div className="flex space-x-2 my-auto">
            {new Date(value).toLocaleString()}
          </div>
        ),
      },
    ],
    []
  );

  return (
    <div className="">
      <div className="w-full flex justify-around">
        <h1 className="text-primary-100 font-bold">User Report</h1>
        <Link to="/reports" className="my-auto">
          <h4 className="text-primary-300 hover:text-primary-200 font-bold">
            Go Back
          </h4>
        </Link>
      </div>
      <ReportTable columns={columns} data={data} />
    </div>
  );
};

export default UserReports;
