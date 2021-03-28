import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";

interface Props {}

const Home: React.FC = (props: Props) => {
  const logoStyes:CSSProperties = {
    height: "1em",
    width: "1em"
  }

  return (
    <div className="container flex flex-col min-h-screen justify-evenly">
      <h1 className="mx-auto text-primary-100">Welcome to <img className="inline-block" style={logoStyes} src="logo512.png" />
      CMS</h1>
      <div className="flex justify-evenly">
        <Link to="signup" className="flex-initial bg-accent text-button py-2 px-4 rounded shadow">Sign Up</Link>
        <Link to="signin" className="flex-initial bg-accent text-button py-2 px-4 rounded shadow">Sign In</Link>
      </div>
    </div>
  );
};

export default Home;
