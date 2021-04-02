import React from "react";
import { Route, Switch } from "react-router";

import GuardedRoute from "./GuardRoutes";

import Grid from "../ui/layout/Grid";
import Dashboard from "../modules/Dashboard";
import Home from "../pages/Home";

import SignIn from "../pages/User/SignIn";
import SignUp from "../pages/User/SignUp";
import SignUpOrSignIn from "../pages/SignUpOrSignIn";

import Courses from "../modules/Courses";
import CourseCreate from "../pages/CourseCreate";

import PostCreate from "../pages/PostCreate";

import { __accessTokenKey__, __refreshTokenKey__ } from "../constants";
import CourseDetail from "../ui/CourseDetail";
import PostDetail from "../ui/PostDetail";

interface Props {}

const Routes: React.FC<Props> = (props: Props) => {
  const hasTokens =
    localStorage.getItem(__accessTokenKey__) &&
    localStorage.getItem(__refreshTokenKey__);

  return (
    <Switch>
      {/* Public Routes */}
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/signin" component={SignIn} />

      {/* Private Routes: Require Login */}
      <Route path="/">(
          <Grid>
            <Switch>
              <Route exact path="/" component={Home} />
              <GuardedRoute exact path="/dashboard" component={Dashboard} />
              <GuardedRoute exact path="/course" component={Courses} />
              <GuardedRoute exact path="/course/:id" component={CourseDetail} />
              <GuardedRoute exact path="/course/create" component={CourseCreate} />
              <GuardedRoute exact path="/post/:id" component={PostDetail} />
              <GuardedRoute exact path="/post/create" component={PostCreate} />
            </Switch>
          </Grid>
        )
      </Route>
    </Switch>
  );
};

export default Routes;
