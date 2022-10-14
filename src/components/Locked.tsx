import * as React from "react";

const Locked = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    xmlSpace="preserve"
    {...props}
  >
    <path
      fill="none"
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M14.5 2.5A5.5 5.5 0 0 1 20 8v4.5H9V8a5.5 5.5 0 0 1 5.5-5.5z"
    />
    <path d="M6 11.5h17a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-11a2 2 0 0 1 2-2z" />
  </svg>
);

export default Locked;
