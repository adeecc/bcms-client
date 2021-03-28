import React from "react";
import { LeftPanel, MiddlePanel, RightPanel } from "./layout";

interface Props {}

const Dashboard = (props: Props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-10">
      <LeftPanel gridStyle="lg:col-span-2" />
      <MiddlePanel gridStyle="lg:col-span-5" />
      <RightPanel gridStyle="lg:col-span-3" />
    </div>
  );
};

export default Dashboard;
