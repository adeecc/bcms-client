import React from "react";
import GlobalSearch from "../GlobalSearch";

interface GridPanelProps {
  gridStyle: string;
  sticky?: boolean;
}

const GridPanel: React.FC<GridPanelProps> = ({
  gridStyle,
  sticky,
  children,
}) => {
  return (
    <div className={gridStyle}>
      <div
        className={`w-full ${
          sticky ? "sticky top-0 lg:h-screen" : ""
        } flex flex-col mx-auto`}
      >
        {children}
      </div>
    </div>
  );
};

interface PanelHeaderProps {}

const SideHeaderWrapper: React.FC<PanelHeaderProps> = ({ children }) => {
  return (
    <div className="mb-7 lg:h-6 pt-7">
      <div className="w-full flex justify-center text-primary-100">
        {children}
      </div>
    </div>
  );
};

const MiddleHeaderWrapper: React.FC<PanelHeaderProps> = ({ children }) => {
  return (
    <div className="w-full mb-7 pt-7 ">
      <GlobalSearch />
      {children}
    </div>
  );
};

export { GridPanel, SideHeaderWrapper, MiddleHeaderWrapper };
