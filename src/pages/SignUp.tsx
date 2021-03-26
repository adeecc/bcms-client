import React from "react";

import UserCreateForm from "../components/user/UserCreateForm";

interface Props {}

const SignUp: React.FC<Props> = (props: Props) => {
  return (
    <div className="min-h-screen">
      <UserCreateForm title="Create Your Account"/>
    </div>
  );
};

export default SignUp;
