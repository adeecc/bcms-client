import React from "react";

const SvgBook = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={512}
      height={512}
      viewBox="0 0 612 612"
      {...props}
    >
      <path
        d="M76.5 0C34.253 0 0 34.253 0 76.5v401.625c0 42.247 36.051 63.342 76.5 76.5L286.875 612s.21-554.625 0-554.625C191.021 31.671 76.5 0 76.5 0zm459 0S424.785 30.485 324.188 57.375h.938V612C432.569 583.332 535.5 554.625 535.5 554.625c39.264-10.155 76.5-34.253 76.5-76.5V76.5C612 34.253 577.747 0 535.5 0z"
        fill="#fff"
        data-original="#000000"
        xmlns="http://www.w3.org/2000/svg"
      />
    </svg>
  );
};

export default SvgBook;
