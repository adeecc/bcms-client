import React, { useState, useEffect } from "react";

interface Props {
  courseId: number;
}

export const PostCreateForm = (props: Props) => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [courseID, setCourseID] = useState<number>(() => props.courseId); // Might not be required Use Prop Directly
  const [tags, setTags] = useState<string[]>([]);

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
  }, [courseID]);

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-4xl">
      <h3 className="mb-8 text-center text-primary-100">
        Creating a Post in {courseCode} {courseName}
      </h3>
      <div className="bg-primary-800 py-8 px-6 shadow rounded-lg sm:px-10">
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
              className="w-full  border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            />
          </div>
          <div className="field-group">
            <label htmlFor="title" className=" font-medium text-primary-100">
              Body
            </label>
            <textarea
              id="body"
              name="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
              className="w-full  border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            />
          </div>
          <div className="field-group">
            <label htmlFor="title" className=" font-medium text-primary-100">
              Tags
            </label>
            <input
              id="tags"
              name="tags"
              type="tags"
              value={tags}
              onChange={(e) => setTags([e.target.value])}
              required
              className="w-full  border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
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
    </div>
  );
};
