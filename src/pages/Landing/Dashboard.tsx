import React from "react";
import { LeftPanel, MiddlePanel, RightPanel } from "./layout";

interface Props {}

const Dashboard = (props: Props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12">
      <LeftPanel gridStyle="lg:col-span-3 h-full" />
      <MiddlePanel gridStyle="lg:col-span-6 h-full" />
      <RightPanel gridStyle="lg:col-span-3 h-full" />
    </div>
  );
};

export default Dashboard;
