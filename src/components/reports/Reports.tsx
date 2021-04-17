import { DownloadIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";

interface ReportCardProps {
  title: string;
  url: string;
}

const ReportCard: React.FC<ReportCardProps> = ({ title, url }) => {
  return (
    <div className="w-full bg-primary-800 p-6 rounded-lg flex justify-between">
      <h5 className="text-primary-100 font-bold truncate  my-auto">{title}</h5>
      <Link to={url} className="my-auto">
        <DownloadIcon className="w-6 text-accent" />
      </Link>
    </div>
  );
};

interface ReportsProps {}

const Reports: React.FC<ReportsProps> = () => {
  const availableReports = [
    {
      title: "User Statistics and Information",
      url: "/reports/users",
    },

    {
      title: "Course Statistics and Information",
      url: "/reports/courses",
    },

    {
      title: "Post Statistics and Information",
      url: "",
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-end mb-5 ">
        <h3 className="text-primary-100 my-auto">Available Reports</h3>
        <button className="py-2 px-6 my-auto rounded-lg text-button bg-accent outline-none focus:outline-none">
          <DownloadIcon className="w-5" />
        </button>
      </div>
      <div className="flex flex-col space-y-7 my-7 ">
        {availableReports?.map((el) => (
          <ReportCard title={el.title} url={el.url} />
        ))}
      </div>
    </div>
  );
};

export default Reports;
