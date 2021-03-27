import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Props {}

const UserCreateForm: React.FC<Props> = (props: Props) => {
  const [username, setUsername] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    console.log(username, name, email, mobile, password);
  };

  return (
    <>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <h3 className="mb-8 text-center text-primary-100 font-black">
          Sign Up!
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
                className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
              />
            </div>

            <div className="">
              <label
                htmlFor="name"
                className="block  font-medium text-primary-100"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
              />
            </div>

            <div className="">
              <label
                htmlFor="email"
                className="block  font-medium text-primary-100"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
              />
            </div>

            <div className="">
              <label
                htmlFor="mobile"
                className="block  font-medium text-primary-100"
              >
                Mobile Number
              </label>
              <input
                id="mobile"
                name="mobile"
                type="text"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
                className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
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
                className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
              />
            </div>

            <div className="">
              <input
                type="submit"
                value="Sign Up"
                className="w-full my-3 py-2 px-4 border border-transparent rounded-md shadow-sm  font-medium text-primary-100 bg-accent hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-hover"
              />
            </div>
          </form>
          <div className="text-primary-100">
            Already Registered?{" "}
            <Link to="signin" className="text-accent font-medium">
              Sign In.
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCreateForm;
