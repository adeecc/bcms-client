import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

interface AppProps {}

export const App: React.FC<AppProps> = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Switch>
          <Route exact path="/" component={} />
        </Switch> */}
        <h1>What is typeScript, if not javaScript persevering!</h1>
      </BrowserRouter>
    </>
  );
};
