import React from "react";
import { Redirect, Route, Switch } from "react-router";

import GuardedRoute from "./GuardRoutes";

import Grid from "../components/layout/Grid";
import Dashboard from "../components/Dashboard";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

import Courses from "../components/Course/Courses";
import CourseCreate from "../pages/CourseCreate";

import CourseDetail from "../components/Course/CourseDetail";
import PostDetail from "../components/Post/PostDetail";
import RoleManagement from "../components/User/RoleManagement";
import UserCourse from "../components/Course/UserCourse";
import Reports from "../components/reports/Reports";
import UserReports from "../components/reports/UserReports";
import CourseReports from "../components/reports/CourseReports";

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
      <GuardedRoute exact path="/reports/users" component={UserReports} />
      <GuardedRoute exact path="/reports/courses" component={CourseReports} />
      <GuardedRoute exact path="/reports/posts" component={CourseReports} />

      <Grid>
        <Switch>
          <GuardedRoute exact path="/dashboard" Component={Dashboard} />
          <GuardedRoute exact path="/user/course" Component={UserCourse} />
          <GuardedRoute exact path="/course" Component={Courses} />
          <GuardedRoute exact path="/course/:id" Component={CourseDetail} />
          <GuardedRoute exact path="/course/create" Component={CourseCreate} />
          <GuardedRoute exact path="/post/:id" Component={PostDetail} />
          <GuardedRoute exact path="/roles" component={RoleManagement} />
          <GuardedRoute exact path="/reports" component={Reports} />
        </Switch>
      </Grid>
    </Switch>
  );
};

export default Routes;
