import React from "react";
import ArticleLink from "./ArticleLink";

function ArticleLinks({ allArticles, setArticle }) {
  return (
    <div className="flex flex-col gap-2 max-h-60 mt-4 overflow-y-auto">
      {allArticles.map((article, index) => (
        <ArticleLink key={index} article={article} setArticle={setArticle} />
      ))}
    </div>
  );
}

export default ArticleLinks;
