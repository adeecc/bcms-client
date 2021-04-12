import React, { useState } from "react";
import { useHistory } from "react-router";

import { createCourse } from "../../api/courseClient";

interface Props {}

const CourseCreateForm: React.FC<Props> = (props: Props) => {
  const history = useHistory();

  const [name, setName] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [sem, setSem] = useState<string>("");
  const [created, setCreated] = useState<boolean>(false);

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const res = await createCourse(name, code, year, sem);
    console.log(res);

    console.table({ name, code, year, sem });

    setCreated(true);
    setName("");
    setCode("");
    setYear("");
    setSem("");
  };

  return (
    <div className="w-full flex flex-col">
      <div className="header mb-8 ">
        <h3 className="text-primary-100">Create a Course</h3>
        {created && <h4 className="text-accent font-bold">Created!</h4>}
      </div>
      <form
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        onSubmit={handleSubmit}
        method="POST"
      >
        <div className="field-group md:col-span-3">
          <label htmlFor="name" className=" font-medium text-primary-100">
            Course Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => {
              setCreated(false);
              setName(e.target.value);
            }}
            required
            className="w-full bg-primary-700 hover:bg-primary-600 text-primary-100 border border-primary-600 px-3 py-2 mt-1 rounded-lg shadow-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
          />
        </div>

        <div className="field-group ">
          <label htmlFor="code" className="font-medium text-primary-100">
            Code
          </label>
          <input
            id="code"
            name="code"
            type="text"
            value={code}
            onChange={(e) => {
              setCreated(false);
              setCode(e.target.value);
            }}
            className="w-full bg-primary-700 hover:bg-primary-600 text-primary-100 border border-primary-600 px-3 py-2 mt-1 rounded-lg shadow-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
          />
        </div>

        <div className="field-group ">
          <label htmlFor="year" className="font-medium text-primary-100">
            Year
          </label>
          <input
            id="year"
            name="year"
            type="text"
            value={year}
            onChange={(e) => {
              setCreated(false);
              setYear(e.target.value);
            }}
            className="w-full bg-primary-700 hover:bg-primary-600 text-primary-100 border border-primary-600 px-3 py-2 mt-1 rounded-lg shadow-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
          />
        </div>

        {/* Convert Semester to Drop Down Menu */}
        <div className="field-group ">
          <label htmlFor="sem" className=" font-medium text-primary-100">
            Semester
          </label>
          <input
            id="sem"
            name="sem"
            type="text"
            value={sem}
            onChange={(e) => {
              setCreated(false);
              setSem(e.target.value);
            }}
            className="w-full bg-primary-700 hover:bg-primary-600 text-primary-100 border border-primary-600 px-3 py-2 mt-1 rounded-lg shadow-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
          />
        </div>

        <div className="field-group col-span-1 md:col-span-3">
          <input
            type="submit"
            value="Create"
            className="w-full my-3 py-2 px-4 border border-transparent rounded-md shadow-sm  font-medium text-primary-100 bg-accent hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-hover"
          />
        </div>
      </form>
    </div>
  );
};

export default CourseCreateForm;
