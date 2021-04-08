import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Tag from "../ui/Tag";

interface Props {
  id: string;
  title: string;
  courseName: string;
  created_at: string;
  updated_at: string;
  tags?: string[];
}

const Post: React.FC<Props> = ({
  id,
  title,
  courseName,
  created_at,
  updated_at,
  tags,
}) => {
  const [createdAtString, setCreatedAtString] = useState(
    new Date(created_at).toDateString()
  );
  const [updatedAtString, setUpdatedAtString] = useState(
    new Date(updated_at).toDateString()
  );

  const [isModified, setIsModified] = useState<boolean>(false);

  useEffect(() => {
    if (new Date(updated_at).getTime() - new Date(created_at).getTime() > 5000) {
      setIsModified(true);
    }
  }, [updated_at, created_at]);

  return (
    <Link
      to={`/post/${id}`}
      key={id}
      className="w-full bg-primary-800 p-6 rounded-lg flex flex-col my-7"
    >
      <div className="w-full flex justify-between">
        <div className="truncate flex flex-row">
          <h5 className="text-primary-100 font-bold truncate">{title}</h5>
          {isModified ? (
            <span className="text-primary-300 ml-1"> (Edited)</span>
          ) : (
            <span className="text-primary-100"></span>
          )}
        </div>

        {isModified ? (
          <span className="text-primary-100">{updatedAtString}</span>
        ) : (
          <span className="text-primary-100">{createdAtString}</span>
        )}
      </div>

      <div className="w-full flex justify-between">
        <div className="text-accent pt-2">{courseName}</div>
        <div className="flex text-primary-300 pt-2">
          {tags?.map((value, index) => {
            if (index === 3) return "..."
            if (index > 3) return "";
            return (
              <Tag key={index} label={value} />
            );
          })}
        </div>
      </div>
    </Link>
  );
};

export default Post;
