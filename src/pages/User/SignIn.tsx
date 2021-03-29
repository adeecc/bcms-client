import React from "react";

import UserSignInForm from "../../modules/forms/SignInForm";

interface Props {}

const SignIn: React.FC<Props> = (props: Props) => {
  return (
    <div className="min-h-screen">
      <UserSignInForm/>
    </div>
  );
};

export default SignIn;
