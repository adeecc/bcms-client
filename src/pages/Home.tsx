import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const Home: React.FC = (props: Props) => {
  return (
    <div>
      <h4 className="text-primary-100">What is typeScript, if not javaScript persevering!</h4>
      <div className="mx-auto my-auto mh-screen flex justify-evenly">
        <Link to="signup" className="flex-initial bg-accent text-button py-2 px-4 rounded shadow">Sign Up</Link>
        <Link to="signin" className="flex-initial bg-accent text-button py-2 px-4 rounded shadow">Sign In</Link>
      </div>
    </div>
  );
};

export default Home;
