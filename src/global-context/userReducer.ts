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
  switch (action.type) {
    case ActionTypes.LogIn:
      state.id = action.payload.id;
      state.fullName = action.payload.fullName;
      state.username = action.payload.username;
      state.isLoggedIn = true;
      console.log("Logged IN!");

      return state;

    case ActionTypes.LogOut:
      state.isLoggedIn = false;
      return state;

    default:
      return state;
  }
};
