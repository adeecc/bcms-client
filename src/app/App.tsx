import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes";

interface AppProps {}

export const App: React.FC<AppProps> = (props: AppProps) => {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
};
