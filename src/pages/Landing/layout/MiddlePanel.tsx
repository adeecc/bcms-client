import React from "react";

import SvgSearch from "../../../icons/Search";

interface Props {
  gridStyle: string;
}

const MiddlePanel: React.FC<Props> = (props: Props) => {
  return (
    <div className={props.gridStyle}>
      <div className="flex flex-col sticky top-0 w-full pt-5">
        {/* Search Bar */}
        <div className="w-full flex-1">
          <div className="h-full mx-4 flex items-center bg-primary-700 hover:bg-primary-600 text-primary-300 focus-within:text-primary-100 rounded-lg">
            <div className="mx-4">
              <SvgSearch />
            </div>

            <input type="text" placeholder="Search for Courses, Users or Posts" className="w-full py-2 px-4 rounded-8 bg-transparent placeholder-primary-300 focus:outline-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddlePanel;
