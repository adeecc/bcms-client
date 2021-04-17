import React, { useEffect, useMemo, useState } from "react";
import { useTable, Column, useSortBy } from "react-table";

interface Props {
  columns: any,
  data: any
}

const ReportTable: React.FC<Props> = ({columns, data}) => {

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy);

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

export default ReportTable;
