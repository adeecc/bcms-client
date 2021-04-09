import React from "react";

interface Props {
  label: string;
}

const TagBullet: React.FC<Props> = ({ label }) => {
  return (
    <div className="bg-primary-700 text-primary-200 rounded mx-1 px-2 py-1 shadow-sm">
      {label}
    </div>
  );
};

export default TagBullet;
