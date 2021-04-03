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

const HeaderWrapper: React.FC<PanelHeaderProps> = ({ children }) => {
  return (
    <div className="w-full mb-10 pt-7">
      {children}
    </div>
  );
};

export { GridPanel, HeaderWrapper };
