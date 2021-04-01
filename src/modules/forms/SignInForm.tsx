import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  
}

const SignUpForm: React.FC<Props> = (props: Props) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log(username, password);
  };

  return (
    <>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <h3 className="mb-8 text-center text-primary-100 font-black">
          Sign In!
        </h3>
        <div className="bg-primary-800 py-8 px-6 shadow rounded-lg sm:px-10">
          <form
            className="mb-0 space-y-6"
            onSubmit={handleSubmit}
            method="POST"
          >
            <div className="">
              <label
                htmlFor="username"
                className="block font-medium text-primary-100"
              >
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-primary-700 hover:bg-primary-600 text-primary-100 border border-primary-600 px-3 py-2 mt-1 rounded-lg shadow-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
              />
            </div>

            <div className="">
              <label
                htmlFor="password"
                className="block  font-medium text-primary-100"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-primary-700 hover:bg-primary-600 text-primary-100 border border-primary-600 px-3 py-2 mt-1 rounded-lg shadow-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
              />
            </div>

            <div className="">
              <input
                type="submit"
                value="Sign In"
                className="w-full my-3 py-2 px-4 border border-transparent rounded-md shadow-sm  font-medium text-button bg-accent hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-hover"
              />
            </div>
          </form>
          <div className="text-primary-100">
            Don't have an account?{" "}
            <Link to="signup" className="text-accent font-medium">
              Sign Up.
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
