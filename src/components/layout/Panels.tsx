import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import { GridPanel, HeaderWrapper } from "./Wrappers";

import logo from "../../img/logo2.png";
import ProfileCard from "../User/ProfileCard";
import GlobalSearch from "../ui/GlobalSearch";
import { UserContext } from "../../global-context/userContext";
import AdminToolCard from "../User/AdminTool";
import CourseFeed from "../Course/CourseFeed";
import { ActionTypes } from "../../global-context/userReducer";

interface PanelProps {
  gridStyle: string;
}

const LeftPanel: React.FC<PanelProps> = ({ gridStyle }) => {
  return (
    <GridPanel gridStyle={gridStyle} sticky>
      {/* Logo */}
      <HeaderWrapper>
        <div className="w-full flex justify-center">
          <Link to="/">
            <img
              alt="logo"
              style={{
                height: "40px",
              }}
              src={logo}
            />
          </Link>
        </div>
      </HeaderWrapper>
      <CourseFeed />
    </GridPanel>
  );
};

const MiddlePanel: React.FC<
  PanelProps & { stickyChildren?: React.ReactNode }
> = ({ gridStyle, stickyChildren, children }) => {
  return (
    <GridPanel gridStyle={gridStyle}>
      <div className="sticky top-0 w-full z-10 bg-primary-900">
        <HeaderWrapper>
          <GlobalSearch />
        </HeaderWrapper>
      </div>
      <div className="w-full">{children}</div>
    </GridPanel>
  );
};

const RightPanel: React.FC<PanelProps> = ({ gridStyle }) => {
  const history = useHistory();

  const { state, dispatch } = useContext(UserContext);

  const logoutHandler = (e: React.SyntheticEvent) => {
      dispatch({
        type: ActionTypes.LogOut,
        payload: {}
      });

      history.replace("/signin");
  };

  return (
    <GridPanel gridStyle={gridStyle} sticky>
      <HeaderWrapper>
        <div className="flex">
          <div
            className="my-auto mx-4"
            // style={{
            //   height: 40,
            //   width: 40,
            // }}
          >
            <Link to="/">
              <img
                src={`https://ui-avatars.com/api/?background=fd6868&color=fff&name=${state.userInfo?.name
                  ?.split(" ")
                  .join("+")}`}
                style={{
                  height: 40,
                  width: 40,
                }}
                alt="avatar"
                className="rounded-full h-full object-cover"
              />
            </Link>
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
      </HeaderWrapper>

      <ProfileCard />
      <AdminToolCard />
    </GridPanel>
  );
};

export { LeftPanel, MiddlePanel, RightPanel };
