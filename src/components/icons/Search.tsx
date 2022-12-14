import * as React from "react";

const Search = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M9 4c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5m0-2C5.1 2 2 5.1 2 9s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7z" />
    <path d="M22 20.3 20.3 22 14 15.7V14h1.7z" />
    <path d="m12.693 13.574.849-.848 2.545 2.545-.848.849z" />
  </svg>
);

export default Search;
