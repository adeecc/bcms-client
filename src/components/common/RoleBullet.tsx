import React from "react";

interface Props {
  value: string;
}

const RoleBullet: React.FC<Props> = ({ value }) => {
  return (
    <button className="bg-primary-700 rounded-lg px-2 text-primary-200 my-auto outline-none focus:outline-none">
      {value}
    </button>
  );
};

export default RoleBullet;
