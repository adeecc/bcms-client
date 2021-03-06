import React from "react";
import { Link } from "react-router-dom";

interface Props {
  cid: any;
  code: string;
  name: string;
  year: string;
  sem: string;
  instructor: string;
}

const CourseCard: React.FC<Props> = ({
  cid,
  code,
  name,
  year,
  sem,
  instructor,
}) => {
  return (
    <Link to={`/course/${cid}`}
      key={cid}
      className="w-full bg-primary-800 p-6 rounded-lg flex flex-col my-7"
    >
      <div className="w-full flex justify-between">
        <div className="truncate flex flex-row">
          <h5 className="text-primary-200 mr-2">{code}</h5>
          <h5 className="text-primary-100 font-bold truncate">{name}</h5>
        </div>

        <span className="text-primary-100">
          Sem {sem} | {year}
        </span>
      </div>
      <div className="w-full text-accent pt-2">{instructor}</div>
    </Link>
  );
};

export default CourseCard;
