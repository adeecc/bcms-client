import React, { useState, useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";

interface Props {
  courseId: number;
}

// @todo: Clean Up Code and UI
// @todo: Implement deletion of tags

const PostCreateForm: React.FC<Props> = ({ courseId }) => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [tags, setTags] = useState<string>("");

  const [courseCode, setCourseCode] = useState<string>("");
  const [courseName, setCourseName] = useState<string>("");

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    console.log(title);
    console.log(body);
    console.log(tags);
  };

  useEffect(() => {
    // Get Value from API
    setCourseName("Database Systems");
    setCourseCode("CS F212");
  }, []);

  return (
    <div className="w-full flex flex-col">
      <div className="header mb-8 ">
        <h3 className="text-primary-100">Create a Post</h3>
        <h4 className="text-primary-300 font-bold">
          {courseCode} {courseName}.
        </h4>
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
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full bg-primary-100 hover:bg-primary-100 text-primary-100 border border-primary-600 px-3 py-2 mt-1 rounded-lg shadow-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
          />
        </div>
        <div className="field-group">
          <label htmlFor="body" className="font-medium text-primary-100">
            Body
          </label>
          <MDEditor
            value={body}
            onChange={(value: string | undefined) => {
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
          <input
            id="tags"
            name="tags"
            type="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            required
            className="w-full bg-primary-100 hover:bg-primary-100 text-primary-100 border border-primary-600 px-3 py-2 mt-1 rounded-lg shadow-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
          />
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
