import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";

import postData from "./sample";

interface Props {}

interface Post {
  id: string;
  title: string;
  courseName: string;
  created_at: Date;
  updated_at: Date;
  tags?: string[];
}

const Feed: React.FC<Props> = (props: Props) => {
  const [posts, setPosts] = useState<Post[]>(() =>
    JSON.parse(postData, (key, value) => {
      console.log(key);
      if (key == "created_at" || key == "updated_at") return new Date(value);
      else return value;
    })
  );

  //   useEffect(() => {
  //     // Get Posts from the API
  //     // const loadedPosts = axiosClient.get();

  //   }, [posts]);

  return (
    <div>
      {posts.map((value, index) => (
        <PostCard
          id="{index}"
          title={value.title}
          courseName={value.courseName}
          created_at={value.created_at}
          updated_at={value.updated_at}
        />
      ))}
    </div>
  );
};

export default Feed;
