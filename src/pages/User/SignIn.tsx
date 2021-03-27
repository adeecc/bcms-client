import React from "react";

import UserSignInForm from "../../components/User/SignInForm";

interface Props {}

const SignIn: React.FC<Props> = (props: Props) => {
  return (
    <div className="min-h-screen">
      <UserSignInForm/>
    </div>
  );
};

export default SignIn;
