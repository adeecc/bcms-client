import React from "react";
import { Link } from "react-router-dom";

import logo from "../../img/logo2.png";

interface Props {
  gridStyle: string;
}

const LeftPanel: React.FC<Props> = (props: Props) => {
  return (
    <div className={props.gridStyle}>
      <div className="pt-5 sticky top-0 lg:h-screen flex flex-col">
        {/* Logo */}
        <div className="mb-7 pt-5">
          <div className="w-full flex justify-center text-primary-100">
            <Link to="/">
              <img
                className="inline-block"
                alt="logo"
                style={{
                  height: "40px",
                  // width: "40px",
                }}
                src={logo}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
