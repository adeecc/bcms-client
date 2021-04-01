import React from "react";
import MiddlePanel from "./MiddlePanel";
import RightPanel from "./RightPanel";
import LeftPanel from "./LeftPanel";

interface Props {}

const Grid: React.FC<Props> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 scrollbar-thin scrollbar-thumb-primary-700">
      <LeftPanel gridStyle="lg:col-span-3 h-full" />
      <MiddlePanel gridStyle="lg:col-span-6 h-full">{children}</MiddlePanel>
      <RightPanel gridStyle="lg:col-span-3 h-full" />
    </div>
  );
};

export default Grid;
