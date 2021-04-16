enum UserRoles {
  Student = "student",
  Faculty = "faculty",
  Admin = "admin",
  None = "none"
};

export type UserInfo = {
  uid: string | number;
  id: string | number;
  username: string;
  name?: string;
  bio?: string;
  email?: string;
  roles: UserRoles[];
  display_name?: string;
};

export type UserType = {
    isLoggedIn: boolean;

    accessToken?: string;
    refreshToken?: string;

    userInfo?: UserInfo;
};

export {
  UserRoles
}