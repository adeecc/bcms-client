import React from "react";
import GlobalSearch from "../GlobalSearch";

interface Props {
  gridStyle: string;
}

const MiddlePanel: React.FC<Props> = ({ gridStyle, children }) => {
  return (
    <div className={gridStyle}>
      <div className="flex flex-col max-w-3xl mx-auto pt-5">
        <div className="sticky top-0 w-full flex-col z-10 py-5 bg-primary-900">
          <div className="w-full flex-1 mb-10">
            <GlobalSearch />
          </div>
        </div>
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default MiddlePanel;
