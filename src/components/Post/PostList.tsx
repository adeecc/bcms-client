import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import PostCard from "./PostCard";

import { Post } from "../../global/interfaces/Post";

import { getCoursePosts } from "../../api/courseClient";
import { client } from "../../api/axiosClient";

interface Props {
  courseId?: string;
  maxPosts?: number;
}

const PostList: React.FC<Props> = () => {
  const { id } = useParams<{ id: string }>();
  const [posts, setPosts] = useState<Post[] | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      if (id) {
        const loadedPosts = await getCoursePosts(id);
        setPosts(loadedPosts);
      } else {
        // const loadedPosts = await getNotifications();
        const loadedPosts = await client.get("notification/");
        // if (loadedPosts) {
        setPosts(loadedPosts);
        console.log(loadedPosts);
        // }
      }
    };
    
    loadPosts();
  }, [id]);

  return (
    <div>
      {posts?.length ? (
        posts.map((value, index) => (
          <PostCard
            key={index}
            id={value.pid}
            title={value.title}
            courseName={value.name || ""}
            created_at={value.created_at}
            updated_at={value.updated_at}
            tags={value.tags}
          />
        ))
      ) : (
        <h3 className="text-primary-300 font-bold my-3">No Posts Yet</h3>
      )}
    </div>
  );
};

export default PostList;
