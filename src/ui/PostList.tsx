import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";

import postData from "../modules/samplePosts";

interface Props {
  courseId?: string;
  maxPosts?: number;
}

interface Post {
  id: string;
  title: string;
  courseName: string;
  created_at: Date;
  updated_at: Date;
  tags?: string[];
}

const PostList: React.FC<Props> = ({ courseId, maxPosts }) => {
  const [posts, setPosts] = useState<Post[] | null>(null);

  useEffect(() => {
    // Get Posts from the API
    // const loadedPosts = axiosClient.get(`{apiBaseUrl}/posts/courseId`);

    const loadedPosts = JSON.parse(postData, (key, value) => {
      if (key === "created_at" || key === "updated_at") return new Date(value);
      else return value;
    });

    if (maxPosts) {
      setPosts(loadedPosts.slice(0, maxPosts));
    } else {
      setPosts(loadedPosts);
    }
  }, [maxPosts, courseId]);

  return (
    <div>
      {posts?.map((value, index) => (
        <PostCard
          id={value.id}
          title={value.title}
          courseName={value.courseName}
          created_at={value.created_at}
          updated_at={value.updated_at}
          tags={value.tags}
        />
      ))}
    </div>
  );
};

export default PostList;
