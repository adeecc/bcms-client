import React, { useReducer } from "react";

import { userReducer, UserActions, ActionTypes } from "./userReducer";
import { UserType } from "../global-context/user";

import {__accessTokenKey__, __refreshTokenKey__} from "../constants";

type userContextType = {
  state: UserType;
  dispatch: React.Dispatch<UserActions>;
};

const initialState = {
  isLoggedIn: false,
};

const defaultUserContext = {
  state: initialState,
  dispatch: () => null,
};

const UserContext = React.createContext<userContextType>(defaultUserContext);

const UserProvider: React.FC = ({ children }) => {
  const [userState, dispatch] = useReducer(userReducer, initialState);

  React.useEffect(() => {
    const accessToken = localStorage.getItem(__accessTokenKey__);
    const refreshToken = localStorage.getItem(__refreshTokenKey__);

    console.log(accessToken, refreshToken);

    if(accessToken && refreshToken) {
      dispatch({
        type: ActionTypes.LogIn,
        payload: {
          accessToken: accessToken,
          refreshToken: refreshToken
        }
      });
    }

  }, []);

  return (
    <UserContext.Provider value={{ state: userState, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };

// TO use:

// const { state, dispatch } = React.useContext(UserContext);

// const logIn = () => {
//   dispatch({
//     type: ActionTypes.LogIn,
//     payload: {
//       isLoggedIn: true,
//       id: 1234,
//       username: "adichopra11",
//       fullName: "Aditya Chopra",
//     },
//   });
// };

// const logOut = () => {
//   dispatch({
//     type: ActionTypes.LogOut,
//     payload: {
//       isLoggedIn: false,
//     },
//   });
// };
