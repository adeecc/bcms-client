import React from "react";
import { useHistory } from "react-router";

import SvgLogout from "../../icons/SolidLogout";
import SvgBook from "../../icons/SolidBook";

import { __accessTokenKey__, __refreshTokenKey__} from "../../constants";


interface Props {
  gridStyle: string;
}

const RightPanel: React.FC<Props> = ({ gridStyle }) => {
  const history = useHistory();

  return (
    <div className={gridStyle}>
      <div className="pt-5 sticky top-0 lg:h-screen flex flex-col">
        <div className="mb-7 h-6 pt-5">
          <div className="flex justify-center">
            <div
              className="my-auto mx-4"
              style={{
                height: 40,
                width: 40,
              }}
            >
              <img
                src="https://cdn.statically.io/avatar/shape=circle/gh"
                alt="avatar"
                className="rounded-full h-full object-cover"
              />
            </div>
            <div className="my-auto mx-4">
              <button className="focus:outline-none" onClick={() => {history.push('/courses');}}>
                <SvgBook
                  style={{
                    height: 32,
                    width: 32,
                  }}
                />
              </button>
            </div>
            <div className="my-auto mx-4">
              <button className="focus:outline-none">
                <SvgLogout
                  style={{
                    height: 32,
                    width: 32,
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
