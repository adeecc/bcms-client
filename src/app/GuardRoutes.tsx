import React, { useEffect, useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../global/context/userContext";
import { ActionTypes } from "../global/context/userReducer";
import { UserRoles, UserType } from "../global/context/user";
import { __accessTokenKey__, __refreshTokenKey__ } from "../constants";

const checkPrevious = (): Boolean => {
  const accessToken = localStorage.getItem(__accessTokenKey__);
  const refreshToken = localStorage.getItem(__refreshTokenKey__);

  return accessToken !== null && refreshToken !== null;
};

const isAuthorized = (
  user: UserType,
  allowedRoles: Array<UserRoles>
): Boolean => {
  // console.log(user, allowedRoles);
  const roles: UserRoles[] = user?.userInfo?.roles || [];
    return (
      user.isLoggedIn &&
      (allowedRoles === undefined ||
        allowedRoles.filter((allowedRole) => roles.includes(allowedRole))
          .length !== 0 ||
        allowedRoles.length === 0)
    );

  // return true;
};

const GuardedRoute: React.FC<any> = ({ Component, roles, ...rest }) => {
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    if (checkPrevious()) {
      dispatch({
        type: ActionTypes.LogIn,
        payload: {
          accessToken: localStorage.getItem(__accessTokenKey__) || "",
          refreshToken: localStorage.getItem(__refreshTokenKey__) || "",
        },
      });
    }
  }, [dispatch]);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthorized(state, roles) ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signin" />
        )
      }
    />
  );
};

export default GuardedRoute;
