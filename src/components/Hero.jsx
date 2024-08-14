import React from "react";

function Hero({ children }) {
  return (
    <header
      className="w-full flex justify-center items-center flex-col"
      id="header"
    >
      {children}
    </header>
  );
}

export default Hero;
