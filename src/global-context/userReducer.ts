import jwt_decode from "jwt-decode";

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
    accessToken: string;
    refreshToken: string;
  };

  [ActionTypes.LogOut]: {
    // Set isLoggedIn to false
  };
};

const decodeToken = (token:string): UserInfo => {
    const decoded: UserInfo = jwt_decode(token);
    console.log(decoded);
    return decoded;
};

export type UserActions = ActionMap<UserPayload>[keyof ActionMap<UserPayload>];

export const userReducer = (state: UserType, action: UserActions): UserType => {

  console.log(state, action);

  switch (action.type) {
    case ActionTypes.LogIn:
      return {
        isLoggedIn: true,

        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,

        userInfo: decodeToken(action.payload.accessToken)
      };

    case ActionTypes.LogOut:
      return {
        isLoggedIn: false
      }
    default:
      return state;
  }
};
