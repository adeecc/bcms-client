import React, { useEffect, useMemo, useState } from "react";
import { useTable, Column, useSortBy } from "react-table";
import { getAllUsers } from "../../api/miscClient";
import RoleBullet from "../common/RoleBullet";

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
      // { Header: "Verification", accessor: "verified" },
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

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable<UserData>({ columns, data }, useSortBy);

  return (
    <div className="overflow-x-scroll flex justify-center">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="border border-primary-700 text-primary-100 font-bold bg-primary-700"
                >
                  {console.log(column.getSortByToggleProps())}
                  {column.render("Header")}
                  <span>
                    {" "}
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}{" "}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="border border-primary-700 p-2 text-primary-100 bg-primary-800"
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserReports;
