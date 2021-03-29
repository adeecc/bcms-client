import React from "react";
import Feed from "../../modules/Feed";
import GlobalSearch from "../GlobalSearch";

interface Props {
  gridStyle: string;
}

const MiddlePanel: React.FC<Props> = (props: Props) => {
  return (
    <div className={props.gridStyle}>
      <div className="flex flex-col max-w-3xl mx-auto pt-5">
        <div className="sticky top-0 w-full flex-col z-10 py-5 bg-primary-900">
          <div className="w-full flex-1 mb-10">
            <GlobalSearch />
          </div>

          <div className="flex justify-between items-end mb-5">
            <h3 className="text-primary-100 my-auto">Your Feed</h3>
            <button className="py-2 px-6 my-auto rounded-lg text-button bg-accent">
              Enroll
            </button>
          </div>
        </div>
        <div className="w-full">
          <Feed />
        </div>
      </div>
    </div>
  );
};

export default MiddlePanel;
