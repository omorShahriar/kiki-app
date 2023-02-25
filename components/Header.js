import React from "react";
import { Title } from "./Heading";

const Header = ({ children }) => {
  return (
    <div className=" my-12 font-bold flex items-center justify-center w-full md:h-80 h-40 rounded-md bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-rose-500 to-indigo-700 text-white">
      <Title>{children}</Title>
    </div>
  );
};

export default Header;
