import React from "react";

export const Title = ({ children }) => {
  return (
    <h1 className="md:text-6xl text-4xl mt-6 mb-12 font-bold leading-normal ">
      {children}
    </h1>
  );
};

export const PrimaryHeading = ({ children }) => {
  return (
    <h2 className=" md:text-4xl text-3xl capitalize font-bold mb-12 mt-6">
      {children}
    </h2>
  );
};
