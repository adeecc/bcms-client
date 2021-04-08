import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import MDEditor from "@uiw/react-md-editor";

import { Post } from "../../global/interfaces/Post";
import Tag from "../ui/Tag";

interface Props {}

const PostDetail: React.FC<Props> = () => {
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState<Post>(() => {
    return {
      id,
      title: "Que Sara Sara",
      body: `# Headering 1\n> Okauy this is very gg as well ngl\n - Hello \n - darkness\n - my\n - old\n - friend`,
      courseName: "Lorem ipsum dolor sit",
      created_at: "Thu Apr 01 2021 17:56:34 GMT+0530 (India Standard Time)",
      updated_at: new Date().toISOString(),
      tags: ["Evaluation", "Mid Semester"],
    };
  });

  const [isModified, setIsModified] = useState<boolean>(false);

  useEffect(() => {
    // Data Required
    // interface meh {
    //   postTitle: string;
    //   postBody: string;
    //   courseId: string; // -> courseName: string;
    //   created_at: Date;
    //   updated_at: Date;
    //   Tags
    //   instructorId
    //   instructorName
    // }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (
      new Date(post.updated_at).getTime() -
        new Date(post.created_at).getTime() >
      5000
    ) {
      setIsModified(true);
    }
  }, [post.updated_at, post.created_at]);

  return isLoading ? (
    <h3 className="text-primary-200 text-center">Loading...</h3>
  ) : (
    <div>
      <div className="flex justify-between mb-2">
        <div className="flex">
          <h3 className="text-primary-100 my-auto mr-2">{post.title}</h3>
          {isModified && (
            <div className="flex">
              <h4 className="text-primary-300 my-auto ml-2"> (Edited)</h4>
            </div>
          )}
        </div>
        <h4 className="text-primary-200 my-auto">({post.courseName})</h4>
      </div>
      <div className="flex justify-between mb-16">
        <h4 className="text-accent mr-4 my-auto">
          {new Date(post.updated_at).toDateString()}
        </h4>
        <div className="flex text-primary-300 pt-2 my-auto">
          {post.tags?.map((value, index) => {
            if (index === 3) return "...";
            if (index > 3) return "";
            return <Tag label={value} />;
          })}
        </div>
      </div>
      <MDEditor.Markdown
        source={post.body}
        className="w-full bg-primary-900 text-primary-100 mt-5 focus:outline-none"
      />
    </div>
  );
};

export default PostDetail;
