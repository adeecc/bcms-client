import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import SignUp from "./pages/User/SignUp";
import SignIn from "./pages/User/SignIn";
import CourseCreate from "./pages/Course/CourseCreate";

interface AppProps {}

export const App: React.FC<AppProps> = (props: AppProps) => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/course/create" component={CourseCreate} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
