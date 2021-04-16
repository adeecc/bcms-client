import React from "react";

import UserSignInForm from "../components/forms/SignInForm";

import { UserContext } from "../global/context/userContext";
import { useHistory } from "react-router-dom";

interface Props {}

const SignIn: React.FC<Props> = (props: Props) => {

  const {state} = React.useContext(UserContext);
  const history = useHistory();

  React.useEffect(() => {
    if(state.isLoggedIn) {
        history.push("/dashboard");
    }
  }, []);

  return (
    <div className="min-h-screen">
      <UserSignInForm/>
    </div>
  );
};

export default SignIn;
