import React from "react";
import { Link } from "react-router-dom";

interface Props {
  gridStyle: string;
}

const LeftPanel: React.FC<Props> = (props: Props) => {
  return (
    <div className={props.gridStyle}>
      <div className="pt-5 sticky top-0 lg:h-screen flex flex-col">
        {/* Logo */}
        <div className="mb-7">
          <div className="w-full flex justify-center text-primary-100">
            <Link to="/">
              <h1>
                <span className="text-accent">B</span>CMS
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
