import React from "react";
import { Link, useHistory } from "react-router-dom";

import GlobalSearch from "../GlobalSearch";

import { __accessTokenKey__, __refreshTokenKey__ } from "../../constants";
import logo from "../../img/logo2.png";

interface Props {
  gridStyle: string;
}

const LeftPanel: React.FC<Props> = (props: Props) => {
  return (
    <div className={props.gridStyle}>
      <div className="pt-10 sticky top-0 lg:h-screen flex flex-col">
        {/* Logo */}
        <div className="mb-7 pt-5">
          <div className="w-full flex justify-center text-primary-100">
            <Link to="/">
              <img
                className="inline-block"
                alt="logo"
                style={{
                  height: "40px",
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

const MiddlePanel: React.FC<Props> = ({ gridStyle, children }) => {
  return (
    <div className={gridStyle}>
      <div className="flex flex-col max-w-4xl mx-auto pt-10">
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


const RightPanel: React.FC<Props> = ({ gridStyle }) => {
  const history = useHistory();

  const logoutHandler = (e: React.SyntheticEvent) => {
    console.log(e);
    localStorage.clear();
    history.push("/signin");
  };

  return (
    <div className={gridStyle}>
      <div className="pt-10 sticky top-0 lg:h-screen flex flex-col">
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

export { LeftPanel, MiddlePanel, RightPanel};