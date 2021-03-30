import React, { useReducer, useContext } from "react";

type UserType = {
  isLoggedIn: boolean;
  id?: number;
  username?: string;
  fullName?: string;
};

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum ActionTypes {
  LogIn = "LOG_IN",
  LogOut = "LOG_OUT",
}

type UserPayload = {
  [ActionTypes.LogIn]: {
    // User User details
    // Set is Logged in to true
    id: number;
    username: string;
    fullName: string;
  };

  [ActionTypes.LogOut]: {
    // Set isLoggedIn to false
  };
};

export type UserActions = ActionMap<UserPayload>[keyof ActionMap<UserPayload>];

export const userReducer = (state: UserType, action: UserActions) => {
  switch (action?.type) {
    case ActionTypes.LogIn:
      return {
        isLoggedIn: true,
      };
    default:
      return state;
  }
};