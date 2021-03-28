import React from "react";
import { Link } from "react-router-dom";

interface Props {
  gridStyle: string;
}

const LeftPanel = (props: Props) => {
  return (
    <div className={props.gridStyle}>
      <div className="flex flex-col sticky top-0 w-full pt-5">
        {/* Logo and Icon */}
        <div className="w-full flex justify-center ">
          <Link to="/dashboard">
            <img
              className="flex-shrink"
                style={{
                  height: "2rem",
                }}
              src="logo512.png"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
