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

import CourseDetail from "../ui/Course/CourseDetail";
import PostDetail from "../ui/Post/PostDetail";

interface Props {}

const Routes: React.FC<Props> = (props: Props) => {
  return (
    <Switch>
      {/* Public Routes */}
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/signin" component={SignIn} />

      {/* Private Routes: Require Login */}
      <Route path="/">
        <Grid>
          <Switch>
            <GuardedRoute exact path="/" component={Home} />
            <GuardedRoute exact path="/dashboard" component={Dashboard} />
            <GuardedRoute exact path="/course" component={Courses} />
            <GuardedRoute exact path="/course/:id" component={CourseDetail} />
            <GuardedRoute
              exact
              path="/course/create"
              component={CourseCreate}
            />
            <GuardedRoute exact path="/post/:id" component={PostDetail} />
          </Switch>
        </Grid>
      </Route>
    </Switch>
  );
};

export default Routes;
