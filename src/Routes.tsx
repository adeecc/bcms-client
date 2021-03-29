import React from "react";
import { Route, Switch } from "react-router";

import CourseCreate from "./pages/CourseCreate";
import Home from "./pages/Home";
import PostCreate from "./pages/PostCreate";
import SignUpOrSignIn from "./pages/SignUpOrSignIn";
import SignIn from "./pages/User/SignIn";
import SignUp from "./pages/User/SignUp";

import { __accessTokenKey__, __refreshTokenKey__ } from "./constants";

interface Props {}

const Routes: React.FC<Props> = (props: Props) => {
  const hasTokens =
    sessionStorage.getItem(__accessTokenKey__) &&
    sessionStorage.getItem(__refreshTokenKey__);

  return (
    <Switch>
      <Route path="/">
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        {!hasTokens ? (
          <SignUpOrSignIn />
        ) : (
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/course/create" component={CourseCreate} />
            <Route exact path="/post/create" component={PostCreate} />
          </Switch>
        )}
      </Route>
    </Switch>
  );
};

export default Routes;
