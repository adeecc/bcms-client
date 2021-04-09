import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import MDEditor from "@uiw/react-md-editor";

import { Post } from "../../global/interfaces/Post";
import TagBullet from "../common/TagBullet";
import { getPostDetail } from "../../api/postClient";
import { getCourseDetail } from "../../api/courseClient";
import { Course } from "../../global/interfaces/Course";

interface Props {}

const PostDetail: React.FC<Props> = () => {
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(true);

  const [post, setPost] = useState<Post>();
  const [parentCourse, setParentCourse] = useState<Course>();

  const [isModified, setIsModified] = useState<boolean>(false);

  const loadData = async () => {
    const post: Post = await getPostDetail(id);
    console.log(post);

    const parentCourse = await getCourseDetail(post.posted_in);
    console.log(parentCourse);

    setPost(post);
    setParentCourse(parentCourse);

    setIsLoading(false);
  };

  useEffect(() => {
    loadData();
  }, [id]);

  useEffect(() => {
    if (
      post &&
      new Date(post.updated_at).getTime() -
        new Date(post.created_at).getTime() >
        5000
    ) {
      setIsModified(true);
    }
  }, [post]);

  return isLoading ? (
    <h3 className="text-primary-200 text-center">Loading...</h3>
  ) : (
    <div>
      {post ? (
        <div>
          <div className="flex justify-between mb-2">
            <div className="flex">
              <h4 className="text-primary-100 my-auto mr-2">{post.title}</h4>
              {isModified && (
                <div className="flex">
                  <h4 className="text-primary-300 my-auto ml-2"> (Edited)</h4>
                </div>
              )}
            </div>
            <h4 className="text-primary-200 my-auto">
              ({parentCourse?.name})
            </h4>
          </div>
          <div className="flex justify-between mb-16">
            <h4 className="text-accent mr-4 my-auto">
              {new Date(post.updated_at).toDateString()}
            </h4>
            <div className="flex text-primary-300 pt-2 my-auto">
              {post.tags?.map((value, index) => {
                return <TagBullet key={index} label={value.tag} />;
              })}
            </div>
          </div>
          <MDEditor.Markdown
            source={post.body}
            className="w-full bg-primary-900 text-primary-100 mt-5 focus:outline-none"
          />
        </div>
      ) : (
        <h4 className="text-primary-300 text-center">Post not found...</h4>
      )}
    </div>
  );
};

export default PostDetail;
