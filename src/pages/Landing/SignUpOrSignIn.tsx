import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const SignUpOrSignIn:React.FC<Props> = (props: Props) => {
  return (
    <div className="container flex flex-col min-h-screen justify-center sm:mx-auto sm:w-full sm:max-w-xl">
      <div className="bg-primary-800 py-8 px-6 shadow rounded-lg sm:px-10">
        <h2 className="mx-auto text-primary-100 text-center mb-10">
          Welcome to{" "}
          <img
            className="inline-block"
            style={{
              height: "1em",
              width: "1em",
            }}
            src="logo512.png"
          />
          CMS
        </h2>
        <div className="flex justify-evenly">
          <Link
            to="signup"
            className="flex-initial bg-accent text-button py-2 px-4 rounded shadow"
          >
            Sign Up
          </Link>
          <Link
            to="signin"
            className="flex-initial bg-accent text-button py-2 px-4 rounded shadow"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpOrSignIn;
