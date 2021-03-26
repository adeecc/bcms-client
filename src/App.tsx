import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

interface AppProps {}

export const App: React.FC<AppProps> = (props: AppProps) => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
