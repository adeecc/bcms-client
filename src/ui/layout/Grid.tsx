import React from "react";
// import {  } from "./Panels";
import { LeftPanel, MiddlePanel, RightPanel } from "./Panels";

interface Props {}

const Grid: React.FC<Props> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 scrollbar-thin scrollbar-thumb-primary-700">
      <LeftPanel gridStyle="lg:col-span-2 w-full h-full" />
      <MiddlePanel gridStyle="lg:col-span-6 h-full w-full max-w-4xl mx-auto">
        {children}
      </MiddlePanel>
      <RightPanel gridStyle="lg:col-span-2 w-full h-full" />
    </div>
  );
};

export default Grid;
