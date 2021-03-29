import React from "react";

import SignUpForm from "../../modules/forms/SignUpForm";

interface Props {}

const SignUp: React.FC<Props> = (props: Props) => {
  return (
    <div className="min-h-screen">
      <SignUpForm/>
    </div>
  );
};

export default SignUp;
