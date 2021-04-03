import React from "react";
import { Redirect, Route, Switch } from "react-router";

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
      <Route exact path="/">
        <Redirect to="/dashboard"></Redirect>
      </Route>

      {/* Public Routes */}
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />

      {/* Private Routes: Require Login */}

        <Grid>
          <Switch>
            <GuardedRoute exact path="/dashboard" Component={Dashboard} />
            <GuardedRoute exact path="/course" Component={Courses} />
            <GuardedRoute exact path="/course/:id" Component={CourseDetail} />
            <GuardedRoute
              exact
              path="/course/create"
              Component={CourseCreate}
            />
            <GuardedRoute exact path="/post/:id" Component={PostDetail} />
          </Switch>
        </Grid>
    </Switch>
  );
};

export default Routes;
