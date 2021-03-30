import React, { useReducer } from "react";

import { userReducer } from './userReducer';

type UserType = {
  isLoggedIn: boolean;
  id?: number;
  username?: string;
  fullName?: string;
};

type userContextType = {
  state: UserType;
  dispatch: React.Dispatch<any>;
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
//       id: 1234,
//       username: "adichopra11",
//       fullName: "Aditya Chopra",
//     },
//   });
// };

// const logOut = () => {
//   dispatch({
//     type: ActionTypes.LogOut,
//     payload: {},
//   });
// };
