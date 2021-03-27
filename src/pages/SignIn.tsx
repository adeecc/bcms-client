import React from "react";

import UserSignInForm from "../components/user/UserSignInForm";

interface Props {}

const SignIn: React.FC<Props> = (props: Props) => {
  return (
    <div className="min-h-screen">
      <UserSignInForm/>
    </div>
  );
};

export default SignIn;
