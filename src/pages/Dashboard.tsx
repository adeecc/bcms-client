import React from "react";
import { LeftPanel, MiddlePanel, RightPanel } from "../ui/layout";

interface Props {}

const Dashboard: React.FC = (props: Props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 scrollbar-thin scrollbar-thumb-primary-700">
      <LeftPanel gridStyle="lg:col-span-3 h-full" />
      <MiddlePanel gridStyle="lg:col-span-6 h-full" />
      <RightPanel gridStyle="lg:col-span-3 h-full" />
    </div>
  );
};

export default Dashboard;
