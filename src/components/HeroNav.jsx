import React from "react";
import { logo } from "../assets";

function HeroNav() {
  return (
    <nav className="flex justify-between items-center w-full mb-10 pt-3">
      <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
      <button
        type="button"
        onClick={() =>
          window.open("https://github.com/ElvinWeb/Sumz", "_blank")
        }
        className="black_btn"
      >
        GitHub
      </button>
    </nav>
  );
}

export default HeroNav;
