enum UserRoles {
  Student = "student",
  Faculty = "faculty",
  Admin = "admin",
  None
};

type UserInfo = {
  id: number;
  username: string;
  fullName?: string;
  email?: string;
  role: UserRoles[];
};

type UserType = {
    isLoggedIn: boolean;

    accessToken?: string;
    refreshToken?: string;

    userInfo?: UserInfo;
};