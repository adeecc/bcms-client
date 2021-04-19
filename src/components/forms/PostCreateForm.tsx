import React, { useState, useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";
import { createPost, getAllTags, updatePost } from "../../api/postClient";
import { Post, Tag } from "../../global/interfaces/Post";

interface Props {
  courseId: string | number;
  courseCode: string;
  courseName: string;
  post?: Post;
}

// @todo: Clean Up Code and UI
// @todo: Implement deletion of tags

const PostCreateForm: React.FC<Props> = ({
  courseId,
  courseCode,
  courseName,
  post,
}) => {
  const [title, setTitle] = useState<string>(post?.title || "");
  const [body, setBody] = useState<string>(post?.body || "");
  const [tags, setTags] = useState<Tag[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>();

  const [posted, setPosted] = useState<boolean>(false);

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    if (!post) {
      const res = await createPost(courseId, title, body, selectedTags);
      console.log(res);
    } else {
      const res = await updatePost(post.pid, title, body, selectedTags);
      console.log(res);
    }

    setPosted(true);
    setTitle("");
    setBody("");
    setSelectedTags([]);
  };

  useEffect(() => {
    const loadTags = async () => {
      const res = await getAllTags();
      console.log(res);
      setTags(res);
  
      console.log("Received Post: ", post);
  
      if (post?.tags) {
        setSelectedTags(
          post.tags.map((value: Tag) => {
            return value.tid?.toString() || "";
          })
        );
      }
    };

    loadTags();
  }, [post]);

  return (
    <div className="w-full flex flex-col">
      <div className="header mb-8 ">
        <h3 className="text-primary-100">Create a Post</h3>
        <h4 className="text-primary-300 font-bold">
          {courseCode} {courseName}.
        </h4>
        {posted && <h4 className="text-accent font-bold">Posted!</h4>}
      </div>

      <form
        className="grid grid-cols-1 gap-4"
        onSubmit={handleSubmit}
        method="POST"
      >
        <div className="field-group">
          <label htmlFor="title" className=" font-medium text-primary-100">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={title}
            onChange={(e) => {
              setPosted(false);
              setTitle(e.target.value);
            }}
            required
            className="w-full form-input bg-primary-100 hover:bg-primary-100 border border-primary-600 px-3 py-2 mt-1 rounded-lg shadow-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
          />
        </div>
        <div className="field-group">
          <label htmlFor="body" className="font-medium text-primary-100">
            Body
          </label>
          <MDEditor
            value={body}
            onChange={(value: string | undefined) => {
              setPosted(false);
              value && setBody(value);
            }}
            preview="edit"
            minHeight={200}
            hideToolbar
            highlightEnable
            className="w-full bg-primary-100 hover:bg-primary-100 border border-primary-600 mt-1 rounded-lg shadow-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
          />
        </div>
        <div className="field-group">
          <label htmlFor="tags" className="font-medium text-primary-100">
            Tags
          </label>
          <select
            multiple
            name="tags"
            id="tags"
            onChange={(e) => {
              const value = Array.from(
                e.target.selectedOptions,
                (option) => option.value
              );
              setSelectedTags(value);
              console.log(value);
            }}
            value={selectedTags}
            className="form-multi-select w-full bf-primary-100 hover:bg-primary-100 border border-primary-600 px-3 py-2 mt-1 rounded-lg shadow-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
          >
            {tags?.map((value: Tag) => (
              <option key={value.tid} value={value.tid || -1}>
                {value.tag}
              </option>
            ))}
          </select>
        </div>
        <div className="field-group col-span-1">
          <input
            type="submit"
            value="Publish Post"
            className="w-full my-3 py-2 px-4 border border-transparent rounded-md shadow-sm  font-medium text-primary-100 bg-accent hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-hover"
          />
        </div>
      </form>
    </div>
  );
};

export default PostCreateForm;
