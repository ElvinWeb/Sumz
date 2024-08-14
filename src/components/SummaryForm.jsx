import React from "react";
import { linkIcon } from "../assets";

function SummaryForm({ onSubmit, article, setArticle }) {
  
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit(e);
    }
  };

  return (
    <form
      className="relative flex justify-center items-center"
      onSubmit={onSubmit}
    >
      <img
        src={linkIcon}
        alt="link-icon"
        className="absolute left-0 my-2 ml-3 w-5"
      />

      <input
        type="url"
        placeholder="Paste the article link"
        onChange={(e) => setArticle({ ...article, url: e.target.value })}
        className="url_input peer"
        onKeyDown={handleKeyDown}
        required
      />
      <button
        type="submit"
        className="submit_btn peer-focus:border-orange-600 peer-focus:text-orange-600"
      >
        <p>↵</p>
      </button>
    </form>
  );
}

export default SummaryForm;
