import React, { useState } from "react";
import { tick, copy } from "../assets";
import toast from "react-hot-toast";

function ArticleLink({ article, setArticle }) {
  const [copied, setCopied] = useState("");
  const handleCopy = (copyUrl) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    toast.success("Article url copied!");
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div onClick={() => setArticle(article)} className="link_card">
      <div className="copy_btn" onClick={() => handleCopy(article.url)}>
        <img
          src={copied === article.url ? tick : copy}
          alt={copied === article.url ? "tick_icon" : "copy_icon"}
          className="w-[40%] h-[40%] object-contain"
        />
      </div>
      <p className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate">
        {article.url}
      </p>
    </div>
  );
}

export default ArticleLink;
