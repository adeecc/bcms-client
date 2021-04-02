import React from "react";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "../global-context/userContext";

import Routes from "./Routes";

interface AppProps {}

export const App: React.FC<AppProps> = (props: AppProps) => {
  return (
    <>
    <UserProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
    </UserProvider>
    </>
  );
};
