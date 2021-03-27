import React, { useState } from "react";

interface Props {}

const CourseCreateForm: React.FC<Props> = (props: Props) => {
  const [name, setName] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [sem, setSem] = useState<string>("");

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    console.log(name, code, year, sem);
  };

  return (
    <>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-4xl">
        <h1 className="mb-8 text-center text-primary-100 font-black">
          Create Course
        </h1>
        <div className="bg-primary-800 py-8 px-6 shadow rounded-lg sm:px-10">
          <form
            className="mb-0 md:flex md:flex-wrap md:justify-between"
            onSubmit={handleSubmit}
            method="POST"
          >
            <div className="field-group mb-4 md:w-full">
              <label htmlFor="name" className=" font-medium text-primary-100">
                Course Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full  border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
              />
            </div>

            <div className="field-group mb-4 md:w-1/3">
              <label htmlFor="code" className="font-medium text-primary-100">
                Code
              </label>
              <input
                id="code"
                name="code"
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
              />
            </div>

            <div className="field-group mb-4 md:w-1/3">
              <label htmlFor="year" className="font-medium text-primary-100">
                Year
              </label>
              <input
                id="year"
                name="year"
                type="text"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
              />
            </div>

            {/* Convert Semester to Drop Down Menu */}
            <div className="field-group mb-4 md:w-1/3">
              <label htmlFor="sem" className=" font-medium text-primary-100">
                Semester
              </label>
              <input
                id="sem"
                name="sem"
                type="text"
                value={sem}
                onChange={(e) => setSem(e.target.value)}
                className="w-full  border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
              />
            </div>

            <div className="field-group md:w-full">
              <input
                type="submit"
                value="Create"
                className="w-full my-3 py-2 px-4 border border-transparent rounded-md shadow-sm  font-medium text-primary-100 bg-accent hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-hover"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CourseCreateForm;
