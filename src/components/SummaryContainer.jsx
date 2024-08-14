import React, { useEffect, useState } from "react";
import { useLazyGetSummaryQuery } from "../services/articleApi";
import ArticleSummary from "./ArticleSummary";
import ArticleLinks from "./ArticleLinks";
import SummaryForm from "./SummaryForm";
import toast from "react-hot-toast";

function SummaryContainer() {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });
  const [allArticles, setAllArticles] = useState([]);
  const [getSummary, { isFetching }] = useLazyGetSummaryQuery();

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles")
    );

    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  const handleSubmit = async function (e) {
    e.preventDefault();

    const existingArticle = allArticles.find(
      (item) => item.url === article.url
    );

    if (existingArticle) return setArticle(existingArticle);

    const { data } = await getSummary({ articleUrl: article.url });

    if (!data) toast.error("Something went wrong!");

    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updateAllArticles = [newArticle, ...allArticles];

      setArticle(newArticle);
      setAllArticles(updateAllArticles);
      localStorage.setItem("articles", JSON.stringify(updateAllArticles));
    }
  };

  return (
    <section className="mt-16 w-full max-w-xl" id="summaryContainer">
      <div className="flex flex-col w-full gap-2">
        <SummaryForm
          onSubmit={handleSubmit}
          article={article}
          setArticle={setArticle}
        />
        <ArticleLinks allArticles={allArticles} setArticle={setArticle} />
        <ArticleSummary isFetching={isFetching} article={article} />
      </div>
    </section>
  );
}

export default SummaryContainer;
