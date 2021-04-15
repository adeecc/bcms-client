import React from "react";
import { SearchIcon } from "@heroicons/react/solid";
import { search } from "../../api/searchClient";
import { Course } from "../../global/interfaces/Course";
import { User } from "../../global/interfaces/User";
import { Post } from "../../global/interfaces/Post";

interface Props { }

const GlobalSearch: React.FC<Props> = (props: Props) => {

  interface searchInterface {
    courses: Array<Course>,
    users: Array<User>,
    posts: Array<Post>
  };

  const [searchResult, setSearchResult] = React.useState<searchInterface>({
    users: Array<User>(),
    courses: Array<Course>(),
    posts: Array<Post>()
  });
  const [searchString, setSearchString] = React.useState<string>("");
  const [lastSearch, setLastSearch] = React.useState<number>(-1);
  const [showResults, setShowResults] = React.useState<Boolean>(false);

  const getSearchResults = (query: string) => {
    window.clearTimeout(lastSearch);

    const update = async () => {
      const res = await search(query);

      setSearchResult(res);
    }

    setLastSearch(window.setTimeout(update, 50));
  };

  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    const value: string = e.currentTarget.value;

    if (value.length > 0)
      getSearchResults(value);
    else
      setSearchResult({
        users: Array<User>(),
        courses: Array<Course>(),
        posts: Array<Post>()
      });

    setSearchString(value);
  }

  return (
    <div className="w-full">
      <div className="w-full flex items-center bg-primary-700 hover:bg-primary-600 text-primary-300 focus-within:text-primary-100 rounded-lg">
        <div className="h-full px-4">
          <SearchIcon className="w-6 h-6" />
        </div>
        <input
          type="text"
          placeholder="Search for Courses, Users or Posts"
          className="w-full py-3 px-4 rounded-8 bg-transparent placeholder-primary-300 focus:outline-none focus:border-transparent"
          value={searchString}
          onChange={handleSearch}
          onBlur={() => setShowResults(false)}
          onFocus={() => setShowResults(true)}
        />
      </div>
      <div className="absolute flex justify-center w-full">
        <div className="mt-2 bg-primary-700 rounded-md shadow-lg overflow-hidden z-20 w-full">
        {showResults && (
          <div>
            {searchResult.courses.slice(0, 5).map(course => (
              <a href={"/course/" + course.cid} className="flex items-center px-4 py-3 border-none hover:bg-primary-600 -mx-2">
                <div className="flex justify-between text-primary-100 w-full px-5 items-center">
                  <span className="text-md">{course.name}</span>
                  <p className="text-sm">
                    {course.code}&nbsp;
                    <span className="text-accent">{course.instructor_name}</span>
                  </p>
                </div>
              </a>
            ))}
            {searchResult.posts.slice(0, 5).map(post => (
              <a href={"/post/" + post.pid} className="flex items-center px-4 py-3 border-none hover:bg-primary-600 -mx-2">
                <div className="flex justify-between text-primary-100 w-full px-5 items-center">
                  <span className="text-md">{post.title}</span>
                  <p className="text-sm">
                    Posted in&nbsp;
                    <span className="text-accent">{post.course_name}</span>
                  </p>
                </div>
              </a>
            ))}
            {searchResult.users.slice(0, 5).map(user => (
              <a href="#" className="flex items-center px-4 py-3 border-none hover:bg-primary-600 -mx-2">
                <div className="flex justify-between text-primary-100 w-full px-5 items-center">
                  <span className="text-md">@{user.username}</span>
                  <span className="text-sm">{user.display_name}</span>
                </div>
              </a>
            ))}
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default GlobalSearch;
