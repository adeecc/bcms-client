import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import PostCard from "./PostCard";

import postData from "../../modules/samplePosts";
import { Post } from "../../global/interfaces/Post";

import { getCoursePosts } from "../../api/courseClient";

interface Props {
  courseId?: string;
  maxPosts?: number;
}

const PostList: React.FC<Props> = () => {
  const { id } = useParams<{ id: string }>();
  const [posts, setPosts] = useState<Post[] | null>(null);

  const loadPosts = async () => {
    let loadedPosts;
    if (id) {
      const loadedPosts = await getCoursePosts(id);

      console.log(loadedPosts)

      // relabel the .post_id field to .id 
      // loadedPosts.forEach((el: any) => {
      //   el.pid = el.post_id;
      //   delete el.post_id;
      // });

      setPosts(loadedPosts);
    } else {
      const loadedPosts = JSON.parse(postData);
      setPosts(loadedPosts);
      console.table(loadedPosts);
    }
  };

  useEffect(() => {
    // Get Posts from the API
    // const loadedPosts = axiosClient.get(`{apiBaseUrl}/posts/courseId`);

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
            courseName={"Course Name"} // value.posted_in}
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
