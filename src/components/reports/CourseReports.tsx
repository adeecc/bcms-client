import React, { useEffect, useMemo, useState } from "react";
import { Column } from "react-table";

import ReportTable from "./ReportTable";
import RoleBullet from "../common/RoleBullet";
import { Link } from "react-router-dom";
import { getAllCourses } from "../../api/courseClient";

interface CourseData {
  cid: string | number;
  code: string;
  name: string;
  year: string | number;
  sem: string | number;
  instructor_id: string | number;
  instructor_name: string;
}

interface Props {}

const CourseReports: React.FC<Props> = () => {
  const [data, setData] = useState<CourseData[]>([]);

  const loadCourseData = async () => {
    const res = await getAllCourses();
    console.log(res[0]);

    setData(res);
  };

  useEffect(() => {
    loadCourseData();
  }, []);

  const columns = useMemo<Column<CourseData>[]>(
    () => [
      { Header: "ID", accessor: "cid" },
      { Header: "Code", accessor: "code" },
      { Header: "Name", accessor: "name" },
      { Header: "Year", accessor: "year" },
      { Header: "Semester", accessor: "sem" },
      { Header: "Instructor ID", accessor: "instructor_id" },
      { Header: "Instructor Name", accessor: "instructor_name" },
    ],
    []
  );

  return (
    <div className="">
      <div className="w-full flex justify-around">
        <h1 className="text-primary-100 font-bold">Course Report</h1>
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

export default CourseReports;
