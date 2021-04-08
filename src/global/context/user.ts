enum UserRoles {
  Student = "student",
  Faculty = "faculty",
  Admin = "admin",
  None = "none"
};

export type UserInfo = {
  id: number;
  username: string;
  name?: string;
  email?: string;
  role: UserRoles[];
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