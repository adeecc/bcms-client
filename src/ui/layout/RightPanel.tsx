import React from "react";

import { __accessTokenKey__, __refreshTokenKey__ } from "../../constants";
import { Link, useHistory } from "react-router-dom";

interface Props {
  gridStyle: string;
}

const RightPanel: React.FC<Props> = ({ gridStyle }) => {
  const history = useHistory();

  const logoutHandler = (e: React.SyntheticEvent) => {
    console.log(e);
    localStorage.clear()
    history.push("/signin");
  };

  return (
    <div className={gridStyle}>
      <div className="pt-5 sticky top-0 lg:h-screen flex flex-col">
        <div className="mb-7 pt-5">
          <div className="flex justify-center">
            <div
              className="my-auto mx-4"
              style={{
                height: 40,
                width: 40,
              }}
            >
              <img
                src="https://cdn.statically.io/avatar/shape=circle/gh"
                alt="avatar"
                className="rounded-full h-full object-cover"
              />
            </div>
            <div className="my-auto mx-4">
              <Link to="/course">
                <h4 className="text-primary-100 hover:text-primary-200 font-bold">
                  Courses
                </h4>
              </Link>
            </div>
            <div className="my-auto mx-4">
              {/* <Link to="/logout">
                <h4 className="text-primary-100 hover:text-primary-200 font-bold">
                  Logout
                </h4>
              </Link> */}

              <button className="focus:outline-none" onClick={logoutHandler}>
                <h4 className="text-primary-100 hover:text-primary-200 font-bold">
                  Logout
                </h4>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
