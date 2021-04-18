import React, { useEffect, useMemo, useState } from "react";
import { useTable, Column, useSortBy } from "react-table";
import {useExportData, convertDataToBlob} from "./export-table";
import { Menu, Item, Separator, Submenu, useContextMenu, TriggerEvent } from 'react-contexify';

import 'react-contexify/dist/ReactContexify.css';
import './table-content-menu.css';

interface Props {
  columns: any,
  data: any
}

const MENU = 'export_menu';

const ReportTable: React.FC<Props> = ({columns, data}) => {

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    exportData
  } = useTable({ columns, data}, useSortBy, useExportData);

  const {show} = useContextMenu({
    id: MENU
  });

  const handleContextMenu = (event: TriggerEvent) => {
    console.log(event);
    event.preventDefault();
    show(event, {
      props: {
        key: 'value'
      }
    });
  };

  const handleItemClick = ({event, props}: any) => {
    console.log(event, props);
  };

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
                      onClick={() => {console.log("clicked", exportData); exportData("pdf", ["User Created", "Last Updated", "Roles"]);}}
                      onContextMenu={event => handleContextMenu(event)}
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
      <Menu id={MENU}>
          <Item onClick={() => exportData("pdf", ["User Created", "Last Updated", "Roles"])}>Export as PDF</Item>
          <Item onClick={handleItemClick}>Export as CSV</Item>
      </Menu>
    </div>
  );
};

export default ReportTable;
