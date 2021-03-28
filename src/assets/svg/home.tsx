import React from "react";

type HomeSvgProps = {
  fill: string;
};

export const HomeSvg = ({ fill = "rgb(225, 170, 152)" }: HomeSvgProps) => {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0)">
        <path
          d="M44.5 0H3.5C1.57 0 0 1.57 0 3.5V8.5C0 10.43 1.57 12 3.5 12H44.5C46.43 12 48 10.43 48 8.5V3.5C48 1.57 46.43 0 44.5 0Z"
          fill={fill}
        />
        <path
          d="M3.5 48H18.5C20.43 48 22 46.43 22 44.5V19.5C22 17.57 20.43 16 18.5 16H3.5C1.57 16 0 17.57 0 19.5V44.5C0 46.43 1.57 48 3.5 48Z"
          fill={fill}
        />
        <path
          d="M44.5 16H29.5C27.57 16 26 17.57 26 19.5V26.5C26 28.43 27.57 30 29.5 30H44.5C46.43 30 48 28.43 48 26.5V19.5C48 17.57 46.43 16 44.5 16Z"
          fill={fill}
        />
        <path
          d="M44.5 34H29.5C27.57 34 26 35.57 26 37.5V44.5C26 46.43 27.57 48 29.5 48H44.5C46.43 48 48 46.43 48 44.5V37.5C48 35.57 46.43 34 44.5 34Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="48" height="48" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
