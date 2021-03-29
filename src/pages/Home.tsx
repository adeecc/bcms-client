import React from "react";
import Dashboard from "./Dashboard";
import SignUpOrSignIn from "./SignUpOrSignIn";

interface Props {}

const verifyLoggedIn = () => {
  const hasTokens =
    localStorage.getItem("access-token") &&
    localStorage.getItem("refresh-token");
  // return hasTokens;
  return true;
};

const Home: React.FC = (props: Props) => {
  return verifyLoggedIn() ? <Dashboard /> : <SignUpOrSignIn />;
};

export default Home;
